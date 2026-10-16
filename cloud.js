(() => {
  'use strict';
  const $=s=>document.querySelector(s);
  const cfg=window.DAYFLOW_SUPABASE||{};
  const status=$('#cloud-status'),help=$('#cloud-help'),login=$('#cloud-login'),email=$('#cloud-email'),syncNow=$('#cloud-sync-now'),signOut=$('#cloud-signout');
  const isConfigured=/^https:\/\/[a-zA-Z0-9.-]+\.supabase\.co\/?$/.test(cfg.url||'') && typeof cfg.publishableKey==='string' && cfg.publishableKey.length>20;
  if(!isConfigured){
    status.textContent='Local-only · your progress stays in this browser.';
    help.textContent='To enable optional cloud backup, fill in config.js and run the included Supabase SQL setup. No account or cloud service is connected yet.';
    login.disabled=true;email.disabled=true;
    return;
  }
  let client,user=null,lastRemoteVersion=null,writeTimer=null,writing=false,initialized=false,connectionAsked=false;
  const show=(message)=>{status.textContent=message};
  const setSignedIn=(yes)=>{login.disabled=yes;email.disabled=yes;syncNow.disabled=!yes;signOut.disabled=!yes;};
  async function getRemote(){const {data,error}=await client.from('dayflow_profiles').select('data,updated_at').eq('user_id',user.id).maybeSingle();if(error)throw error;return data;}
  async function putRemote(state){const {data,error}=await client.from('dayflow_profiles').upsert({user_id:user.id,data:state,updated_at:new Date().toISOString()},{onConflict:'user_id'}).select('updated_at').single();if(error)throw error;lastRemoteVersion=data.updated_at;}
  function local(){return window.DayflowBridge.read();}
  async function resolveVersion(){
    if(!user||connectionAsked)return;
    connectionAsked=true;
    try{
      show('Checking your cloud backup…');const remote=await getRemote();
      if(!remote){
        if(!confirm('No cloud backup exists for this account. Upload your current local Dayflow data as the first cloud backup?')){show('Cloud connected · backup not started');return;}
        await putRemote(local());initialized=true;show('Cloud backup active · saved');return;
      }
      lastRemoteVersion=remote.updated_at;
      if(JSON.stringify(remote.data)===JSON.stringify(local())){initialized=true;show('Cloud backup active · up to date');return;}
      if(confirm('Cloud data already exists. Press OK to load the cloud version into this browser. Press Cancel to keep local data (you can upload it using Sync now).')){
        window.DayflowBridge.replace(remote.data);
        initialized=true;show('Cloud data restored · up to date');
      }else{initialized=false;show('Local data kept · click Sync now to choose whether to upload');}
    }catch(e){show('Cloud check failed');help.textContent=e.message||'Please check your Supabase table and RLS policies.'}
  }
  async function upload(force=false){
    if(!user||writing)return;
    writing=true;
    try{
      const remote=await getRemote();
      if(remote && (remote.updated_at!==lastRemoteVersion)){
        if(!confirm('Another device updated your cloud copy. Press OK to replace that cloud copy with this browser’s data, or Cancel to leave both untouched.')){
          show('Sync paused · cloud is newer. Refresh or reconnect to load its version.');return;
        }
      }
      if(force&&!initialized&&remote&&!confirm('This will replace your existing cloud backup with your current browser data. Continue?'))return;
      await putRemote(local());initialized=true;show('Cloud backup active · just synced');
    }catch(e){show('Cloud save failed');help.textContent=e.message||'Verify table permissions and connection.'}finally{writing=false;}
  }
  function queueUpload(){if(!user||!initialized)return;clearTimeout(writeTimer);writeTimer=setTimeout(()=>upload(false),1300)}
  window.addEventListener('dayflow:saved',queueUpload);
  async function checkOtherDevice(){
    if(!user||!initialized||writing)return;
    try{
      const remote=await getRemote();
      if(remote&&remote.updated_at!==lastRemoteVersion){
        if(confirm('Your cloud backup changed on another device. Load its updated progress here? Cancel will keep this browser unchanged and pause automatic syncing.')){
          clearTimeout(writeTimer);window.DayflowBridge.replace(remote.data);lastRemoteVersion=remote.updated_at;
          show('New progress downloaded from cloud');
        }else{initialized=false;show('Sync paused · cloud changed on another device');}
      }
    }catch(e){show('Offline · local changes still save in this browser')}
  }
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)checkOtherDevice()});
  window.addEventListener('online',()=>{if(user&&initialized)upload()});
  login.addEventListener('click',async()=>{
    if(!email.validity.valid||!email.value.trim()){email.focus();show('Enter a valid email address.');return}
    login.disabled=true;
    try{const {error}=await client.auth.signInWithOtp({email:email.value.trim(),options:{emailRedirectTo:location.origin+location.pathname}});if(error)throw error;show('Check your inbox for the secure Dayflow sign-in link.')}catch(e){show('Could not send sign-in email');help.textContent=e.message;}finally{login.disabled=false}
  });
  syncNow.addEventListener('click',()=>upload(true));
  signOut.addEventListener('click',async()=>{clearTimeout(writeTimer);await client.auth.signOut();user=null;initialized=false;connectionAsked=false;setSignedIn(false);show('Signed out · local habits stay on this device');});
  async function loadSDK(){
    const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';script.defer=true;
    await new Promise((resolve,reject)=>{script.onload=resolve;script.onerror=()=>reject(Error('Could not load Supabase client library.'));document.head.appendChild(script)});
    if(!window.supabase?.createClient)throw Error('Supabase client library unavailable.');
    client=window.supabase.createClient(cfg.url.replace(/\/$/,''),cfg.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
    client.auth.onAuthStateChange((event,session)=>{
      // Defer reads until auth finishes its internal state update.
      if(event==='SIGNED_IN' && session?.user){const changed=user?.id!==session.user.id;user=session.user;setSignedIn(true);if(changed){connectionAsked=false;setTimeout(resolveVersion,0)}}
      if(event==='SIGNED_OUT'){user=null;initialized=false;connectionAsked=false;setSignedIn(false)}
    });
    const {data:{session}}=await client.auth.getSession();
    if(session?.user){user=session.user;setSignedIn(true);await resolveVersion()}else show('Cloud available · sign in to enable backup');
  }
  loadSDK().catch(e=>{show('Cloud unavailable');help.textContent=e.message;login.disabled=true});
})();
