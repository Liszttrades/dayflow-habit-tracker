    (() => {
    'use strict';
    const ICONS = {
      grid:'<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',
      checklist:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 10 2 2 3-3M14 10h4M7 16h11"/>',
      calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
      chart:'<path d="M4 20V10M10 20V4M16 20v-8M22 20V7"/>',
      plus:'<path d="M12 5v14M5 12h14"/>',
      minus:'<path d="M5 12h14"/>',
      settings:'<path d="M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"/><path d="M19.5 12a8 8 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a8 8 0 0 0-2-1.2l-.3-2.5h-4l-.3 2.5a8 8 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5a8 8 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1a8 8 0 0 0 2 1.2l.3 2.5h4l.3-2.5a8 8 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5a8 8 0 0 0 .1-1.2Z"/>',
      sparkles:'<path d="m12 3 1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9L12 3ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"/>',
      'chevron-left':'<path d="m14 18-6-6 6-6"/>',
      'chevron-right':'<path d="m10 18 6-6-6-6"/>',
      'chevron-down':'<path d="m6 9 6 6 6-6"/>',
      check:'<path d="m5 12 4 4L19 6"/>',
      'check-circle':'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
      'trending-up':'<path d="m3 17 7-7 4 4 7-7M15 7h6v6"/>',
      flame:'<path d="M12 22c4.5 0 7-3.2 7-7.1 0-3.2-1.9-6.2-5-9.2.1 2.5-1.2 3.8-2.5 4.3C12.2 6.9 10.5 4.3 8 2c0 3-1 4.8-2.4 7C4.6 10.6 5 12.9 5 15.1 5 19.4 8 22 12 22Z"/><path d="M12 21.6c2.2 0 3.4-1.6 3.4-3.5 0-1.9-.9-3.3-2.4-4.8 0 1.7-.7 2.2-1.4 2.5 0-1.5-.6-2.7-1.7-3.9 0 2.3-1.5 3.3-1.5 6.2 0 2.1 1.4 3.5 3.6 3.5Z"/>',
      target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
      heart:'<path d="M20.8 4.6a5.6 5.6 0 0 0-7.9 0L12 5.5l-.9-.9a5.6 5.6 0 0 0-7.9 7.9L12 21l8.8-8.5a5.6 5.6 0 0 0 0-7.9Z"/>',
      search:'<circle cx="10.7" cy="10.7" r="6.6"/><path d="m16 16 5 5"/>',
      menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
      x:'<path d="M5 5 19 19M19 5 5 19"/>',
      sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
      moon:'<path d="M20.4 15.4A8.7 8.7 0 0 1 8.6 3.6a8.8 8.8 0 1 0 11.8 11.8Z"/>',
      droplet:'<path d="M12 22a7 7 0 0 0 7-7c0-4.1-4.4-8.9-7-12-2.6 3.1-7 7.9-7 12a7 7 0 0 0 7 7Z"/><path d="M9 17a3 3 0 0 0 3 3"/>',
      book:'<path d="M12 6c-3.5-2-6.3-2-9-1v14c3.3-1 6.7-1 9 1 2.3-2 5.7-2 9-1V5c-2.7-1-5.5-1-9 1ZM12 6v14"/>',
      dumbbell:'<path d="M3 9v6M6 7v10M9 10v4M15 10v4M18 7v10M21 9v6M9 12h6M3 9h3M3 15h3M18 9h3M18 15h3"/>',
      leaf:'<path d="M20 4C11 4 5 7 5 14a6 6 0 0 0 6 6c7 0 9-7 9-16Z"/><path d="M4 21c2-6 7-9 12-12"/>',
      pen:'<path d="m14 5 5 5M3 21l5-.8L20 8.2 15.8 4 3.8 16 3 21Z"/><path d="M3 21h18"/>',
      footsteps:'<ellipse cx="8" cy="15" rx="3.2" ry="5" transform="rotate(19 8 15)"/><ellipse cx="17" cy="9" rx="3.2" ry="5" transform="rotate(19 17 9)"/><path d="M3.3 8.8h.1M6 7.5h.1M9 7.6h.1M12 19h.1M15 18.2h.1M18 17h.1"/>',
      brain:'<path d="M12 5a4 4 0 0 0-7.5 2A4.2 4.2 0 0 0 4 14a4 4 0 0 0 7 3V5ZM12 5a4 4 0 0 1 7.5 2A4.2 4.2 0 0 1 20 14a4 4 0 0 1-7 3V5ZM12 17v4M7 10c2-1 3 0 3 2M17 10c-2-1-3 0-3 2"/>',
      coffee:'<path d="M4 9h14v6a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6V9ZM18 10h2a2 2 0 0 1 0 4h-2M8 3v3M13 3v3"/>',
      music:'<path d="M9 18V5l12-2v13M9 18c0 2-2 3-4 3s-4-1-4-3 2-3 4-3 4 1 4 3ZM21 16c0 2-2 3-4 3s-4-1-4-3 2-3 4-3 4 1 4 3Z"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      shield:'<path d="M12 2 4 5v7c0 5 3.4 8.1 8 10 4.6-1.9 8-5 8-10V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
      trash:'<path d="M3 6h18M8 6V4h8v2m-11 0 1 15h12l1-15M10 10v7M14 10v7"/>',
      download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
      upload:'<path d="M12 17V5m-5 5 5-5 5 5M4 17v4h16v-4"/>'
    };
    function icon(name,size=19){return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.sparkles}</svg>`}
    document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon)});
    /* Hand-drawn, two-dimensional filled icons for habits and SVG flame badges. */
    const livelyShapes={
      droplet:'<path d="M24 3C19 11 9 22 9 30a15 15 0 0 0 30 0C39 22 29 11 24 3Z" fill="#4facf8" stroke="#277bdb" stroke-width="2"/><path d="M18 19c-4 6-5 10-4 14" fill="none" stroke="#d1f0ff" stroke-width="5" stroke-linecap="round"/><ellipse cx="30" cy="37" rx="4" ry="2" fill="#e2f8ff" opacity=".65"/>',
      book:'<path d="M23 12C15 7 9 8 4 10v27c8-3 14-2 20 2 6-4 12-5 20-2V10c-6-2-14-3-21 2Z" fill="#8664eb" stroke="#6445bd" stroke-width="2.3"/><path d="M24 15c-5-4-10-4-16-3v21c6-1 11 0 16 3V15Z" fill="#fff6eb"/><path d="M24 15c5-4 10-4 16-3v21c-6-1-11 0-16 3V15Z" fill="#e7daff"/><path d="M24 16v20" stroke="#8d72e8" stroke-width="2.3"/><path d="M12 18h7M29 18h7M12 23h7M29 23h7" stroke="#b4a3ef" stroke-width="1.8" stroke-linecap="round"/>',
      dumbbell:'<rect x="4" y="16" width="8" height="17" rx="3" fill="#ffb69a" stroke="#f27e6e" stroke-width="2"/><rect x="36" y="16" width="8" height="17" rx="3" fill="#ffb69a" stroke="#f27e6e" stroke-width="2"/><rect x="10" y="12" width="9" height="24" rx="3" fill="#fd8478" stroke="#e75c60" stroke-width="2"/><rect x="29" y="12" width="9" height="24" rx="3" fill="#fd8478" stroke="#e75c60" stroke-width="2"/><rect x="18" y="21" width="12" height="7" rx="3" fill="#b75a83"/>',
      leaf:'<path d="M24 43C4 34 6 10 30 7c10-1 14-2 14-2 0 19-5 34-20 38Z" fill="#3ecbb0" stroke="#22a98b" stroke-width="2"/><path d="M13 36c6-12 13-15 23-22" stroke="#f0ffee" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M23 26 22 17M27 23l9 1" stroke="#b9ffe7" stroke-width="2" fill="none"/>',
      sun:'<circle cx="24" cy="24" r="11" fill="#ffd063" stroke="#efad36" stroke-width="2"/><circle cx="21" cy="21" r="4" fill="#ffeb9b" opacity=".9"/><path d="M24 3v6M24 39v6M3 24h6M39 24h6M9 9l5 5M34 34l5 5M9 39l5-5M34 14l5-5" stroke="#ffbb54" stroke-width="3.5" stroke-linecap="round"/>',
      moon:'<path d="M33 6C11 4 5 30 18 39c10 8 26 0 26-12-12 8-26-8-11-21Z" fill="#9e91ee" stroke="#7d71d5" stroke-width="2"/><path d="m11 8 1.5 4L17 14l-4.5 1.5L11 20l-1.5-4.5L5 14l4.5-2L11 8ZM35 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" fill="#ffda7c"/>',
      brain:'<path d="M23 10C12 1 4 12 8 20c-9 8 2 21 13 17 1 8 7 7 9 0 12 3 21-12 10-18 2-11-11-18-17-9Z" fill="#c9a2f1" stroke="#a67ad9" stroke-width="2.5"/><path d="M24 12v24M17 15c6 2 6 7 4 11M31 18c-6 1-6 5-5 8M13 28c4-3 7-2 8 1M35 29c-4-4-7-2-9 1" stroke="#e9d5ff" fill="none" stroke-width="2.5" stroke-linecap="round"/>',
      footsteps:'<ellipse cx="16" cy="30" rx="9" ry="13" fill="#8e98f2" stroke="#707fd7" stroke-width="2" transform="rotate(24 16 30)"/><ellipse cx="34" cy="17" rx="9" ry="13" fill="#b0b6ff" stroke="#7583e3" stroke-width="2" transform="rotate(24 34 17)"/><ellipse cx="13" cy="26" rx="3" ry="6" fill="#d4dcff" transform="rotate(24 13 26)"/><ellipse cx="31" cy="13" rx="3" ry="6" fill="#e8ecff" transform="rotate(24 31 13)"/>',
      pen:'<path d="m10 31 21-24 10 9-21 24-14 3 4-12Z" fill="#fc93bc" stroke="#de6fa1" stroke-width="2"/><path d="m26 13 10 9" stroke="#bd548d" stroke-width="3"/><path d="m10 31 10 9-14 3Z" fill="#fbd4a7"/><path d="m6 43 4-12 5 6Z" fill="#6a5b6e"/>',
      clock:'<circle cx="24" cy="24" r="18" fill="#70d6c1" stroke="#31b19c" stroke-width="3"/><circle cx="24" cy="24" r="14" fill="#effef8"/><path d="M24 12v13l8 5" stroke="#30b09c" stroke-width="3.2" stroke-linecap="round"/><circle cx="24" cy="24" r="3" fill="#43c1ac"/>',
      coffee:'<path d="M7 17h27v16c0 7-5 11-13 11S7 40 7 33V17Z" fill="#ffd09f" stroke="#ce8c58" stroke-width="2"/><path d="M34 19h4c10 0 8 14-4 14" fill="none" stroke="#d79f70" stroke-width="4"/><path d="M13 12c-4-5 6-7 2-11M25 13c-4-5 6-7 2-11" fill="none" stroke="#e4bb9e" stroke-width="2.2" stroke-linecap="round"/>',
      music:'<path d="M19 9 43 4v31h-7V14l-13 3v22h-7V9Z" fill="#8b86f5" stroke="#6867cf" stroke-width="2"/><ellipse cx="15" cy="39" rx="10" ry="7" fill="#c5b4ff"/><ellipse cx="35" cy="35" rx="10" ry="7" fill="#a795fc"/>',
      heart:'<path d="M24 43 5 23C-3 10 12 2 24 14 36 2 51 10 43 23L24 43Z" fill="#fc83a8" stroke="#e75b86" stroke-width="2"/><path d="M9 17c3-7 9-5 12-1" fill="none" stroke="#ffd9e9" stroke-width="3" stroke-linecap="round"/>',
      target:'<circle cx="24" cy="24" r="20" fill="#b1a1f8"/><circle cx="24" cy="24" r="15" fill="#fff"/><circle cx="24" cy="24" r="11" fill="#ab96ff"/><circle cx="24" cy="24" r="6" fill="#fff"/><circle cx="24" cy="24" r="3" fill="#7b67e1"/>',
      sparkles:'<path d="M24 2 30 18 46 24 30 30 24 46 18 30 2 24 18 18 24 2Z" fill="#af88fb" stroke="#8a69df" stroke-width="2"/><circle cx="39" cy="9" r="4" fill="#ffe49b"/><circle cx="8" cy="39" r="3" fill="#ffc0cf"/>'
    };
    function livelyIcon(name,size=27){return `<svg class="lively-icon" width="${size}" height="${size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${livelyShapes[name]||livelyShapes.sparkles}</svg>`}
    // Unicode emoji preserve the native iOS look on Apple devices and render in color everywhere else.
    // Existing saved icon IDs are mapped here, so prior habit data remains compatible.
    const nativeEmoji={droplet:'💧',book:'📚',dumbbell:'🏋️',leaf:'🪷',pen:'✏️',footsteps:'👟',sun:'☀️',moon:'🌙',brain:'🧠',coffee:'☕',music:'🎵',target:'🎯',heart:'💖',clock:'⏰',sparkles:'✨'};
    const iconCatalog=[
      ['droplet','Water','Wellness'],['book','Books','Focus'],['dumbbell','Weights','Fitness'],['leaf','Meditation','Wellness'],['pen','Writing','Focus'],['footsteps','Walking','Fitness'],['sun','Morning','Lifestyle'],['moon','Sleep','Lifestyle'],['brain','Learning','Focus'],['coffee','Coffee','Lifestyle'],['music','Music','Lifestyle'],['target','Goals','Focus'],['heart','Self care','Wellness'],['clock','Time','Focus'],['sparkles','Magic','Lifestyle'],
      ['emoji:🏃','Running','Fitness'],['emoji:🚴','Cycling','Fitness'],['emoji:🧘','Yoga','Wellness'],['emoji:💪','Strength','Fitness'],['emoji:🏊','Swimming','Fitness'],['emoji:⚽','Sports','Fitness'],['emoji:🥾','Hiking','Fitness'],['emoji:🦋','Mindfulness','Wellness'],['emoji:🥗','Healthy meals','Wellness'],['emoji:🍎','Fruit','Wellness'],['emoji:💊','Vitamins','Wellness'],['emoji:🪥','Brush teeth','Wellness'],['emoji:🧴','Skin care','Wellness'],['emoji:📖','Study','Focus'],['emoji:💻','Coding','Focus'],['emoji:📝','Notes','Focus'],['emoji:🎨','Painting','Focus'],['emoji:📅','Planning','Focus'],['emoji:💼','Work','Focus'],['emoji:💰','Budget','Focus'],['emoji:🪴','Plants','Lifestyle'],['emoji:🐶','Pets','Lifestyle'],['emoji:🧹','Cleaning','Lifestyle'],['emoji:🍳','Cooking','Lifestyle'],['emoji:🌻','Sunshine','Lifestyle'],['emoji:🛌','Rest','Lifestyle'],['emoji:📵','Screen break','Lifestyle'],['emoji:🎮','Gaming','Lifestyle'],['emoji:❤️','Love','Wellness'],['emoji:🌈','Joy','Lifestyle'],['emoji:🕯️','Relax','Wellness'],['emoji:🎸','Instruments','Lifestyle'],['emoji:🌊','Outdoors','Fitness'],['emoji:📷','Photos','Lifestyle']
    ].map(([id,label,group])=>({id,label,group,emoji:nativeEmoji[id]||id.slice(6)}));
    const emojiIds=new Set(iconCatalog.map(i=>i.id));
    function emojiFor(name){return nativeEmoji[name] || (typeof name==='string'&&name.startsWith('emoji:')&&emojiIds.has(name)?name.slice(6):null)}
    const oldLivelyIcon=livelyIcon;
    livelyIcon=function(name,size=27){if(name==='leaf')return oldLivelyIcon(name,size);const emoji=emojiFor(name);return emoji?`<span class="habit-emoji" style="--emoji-size:${size}px" aria-hidden="true">${emoji}</span>`:oldLivelyIcon(name,size)};
    const DEFAULT_CATEGORIES=['Health','Mind','Lifestyle'];
    const DEFAULT_CATEGORY_ICONS={Health:'heart',Mind:'brain',Lifestyle:'leaf'};
    const CATEGORY_ICON_CHOICES=iconCatalog.map(item=>item.id); // Same 49 icons as the habit picker
    function cleanCategoryName(name){return String(name||'').trim().replace(/\s+/g,' ').slice(0,24)}
    function normalizeCategoryIcons(saved={},categories=[]){
      const base={...DEFAULT_CATEGORY_ICONS};
      if(saved&&typeof saved==='object') for(const [name,iconId] of Object.entries(saved)){const clean=cleanCategoryName(name);if(clean&&CATEGORY_ICON_CHOICES.includes(iconId)) base[clean]=iconId;}
      for(const c of categories){const clean=cleanCategoryName(c);if(clean&&!base[clean]) base[clean]='sparkles';}
      return base;
    }
    function categoryIconId(name){const saved=state?.categoryIcons?.[name];return CATEGORY_ICON_CHOICES.includes(saved)?saved:(DEFAULT_CATEGORY_ICONS[name]||'sparkles')}
    function categoryIconMarkup(name,size=18){return livelyIcon(categoryIconId(name),size)}
    function categoryEmoji(name){return emojiFor(categoryIconId(name))||'✨'}
    function mergedCategories(saved=[],habits=[]){
      const result=[...DEFAULT_CATEGORIES];
      for(const value of [...(Array.isArray(saved)?saved:[]),...habits.map(h=>h.category)]){
        const clean=cleanCategoryName(value);if(clean&&!['all','all habits'].includes(clean.toLocaleLowerCase())&&!result.some(n=>n.toLocaleLowerCase()===clean.toLocaleLowerCase())&&result.length<60)result.push(clean);
      }
      return result;
    }
    const MILESTONES=[
      {days:3,name:'Spark',tip:'#ff542c',middle:'#ff8d19',base:'#ffdf4d',core:'#fff1b2',accent:'#ff9d24',soft:'#fff4e6',outline:'#ffe2c4',shadow:'#ff8a4a66',glow:'#ffa63157'},
      {days:10,name:'Blaze',tip:'#e94b15',middle:'#ff7018',base:'#ffbb26',core:'#fff3a6',accent:'#f78120',soft:'#fff1e7',outline:'#ffdbc0',shadow:'#fa682960',glow:'#ff8a285b'},
      {days:30,name:'Wildfire',tip:'#d62548',middle:'#fc4554',base:'#ffab5c',core:'#fff2b0',accent:'#f54a58',soft:'#fff0f0',outline:'#ffd6d9',shadow:'#f54a5d66',glow:'#fb43546b'},
      {days:100,name:'Radiance',tip:'#c626e8',middle:'#f64db7',base:'#ff92db',core:'#fff1fb',accent:'#e448c7',soft:'#fff0fb',outline:'#f9d4f5',shadow:'#e44ec766',glow:'#f654b36b'},
      {days:200,name:'Eternal',tip:'#7539df',middle:'#ad4ff6',base:'#e397ff',core:'#fff3ff',accent:'#a062f2',soft:'#f4edff',outline:'#e7d5ff',shadow:'#a267fa66',glow:'#a366fd70'}
    ];
    let flameSerial=0;
    function flameArt(m,size=80){
      const t=m||MILESTONES[0],uid='flame'+(++flameSerial);
      return `<svg class="flame-illustration" width="${size}" height="${Math.round(size*1.13)}" viewBox="0 0 100 118" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${t.name} flame">
        <defs><linearGradient id="${uid}a" x1=".3" y1="0" x2=".66" y2="1"><stop stop-color="${t.tip}"/><stop offset=".49" stop-color="${t.middle}"/><stop offset="1" stop-color="${t.base}"/></linearGradient><linearGradient id="${uid}b" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="${t.base}"/><stop offset="1" stop-color="${t.core}"/></linearGradient></defs>
        <path d="M54 5C60 26 47 35 48 49c-7-6-9-18-10-28-5 17-26 31-26 54 0 24 17 38 40 38 22 0 38-15 38-39 0-17-10-30-24-40 2 14-4 24-12 28 4-19 5-41 0-57Z" fill="url(#${uid}a)" stroke="${t.tip}" stroke-width="1.4" stroke-linejoin="round"/>
        <path d="M52 65c1 13-13 16-13 29 0 11 7 17 15 17 10 0 18-8 18-19 0-11-6-18-14-24 2 9-1 14-6 17 2-8 2-14 0-20Z" fill="url(#${uid}b)" opacity=".97"/>
        <path d="M33 52c-5 7-12 21-11 32" stroke="#fff" opacity=".47" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M61 93c-1 7-6 12-12 12" stroke="#fff" opacity=".65" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M49 11c1 7 2 12 0 21" stroke="#fff" opacity=".26" stroke-width="3" stroke-linecap="round" fill="none"/>
      </svg>`;
    }
    function tierFor(streak){return [...MILESTONES].reverse().find(m=>streak>=m.days)||null}
    const colorChoices=['#8069eb','#f0926d','#38b99d','#58a2eb','#e77caa','#d5a544','#7a8dd9','#a37bde'];
    const iconChoices=iconCatalog.map(entry=>entry.id);
    const STORAGE_KEY='dayflow_tracker_v2';
    const defaultHabits=[
      {id:'water',name:'Drink water',category:'Health',icon:'droplet',color:'#58a2eb',goal:8,step:1,unit:'glass'},
      {id:'read',name:'Read a book',category:'Mind',icon:'book',color:'#8069eb',goal:20,step:5,unit:'minute'},
      {id:'workout',name:'Workout',category:'Health',icon:'dumbbell',color:'#f0926d',goal:30,step:10,unit:'minute'},
      {id:'meditate',name:'Meditate',category:'Mind',icon:'leaf',color:'#38b99d',goal:10,step:5,unit:'minute'},
      {id:'stretch',name:'Morning stretch',category:'Health',icon:'sun',color:'#d5a544',goal:10,step:5,unit:'minute'},
      {id:'learn',name:'Learn something new',category:'Mind',icon:'brain',color:'#a37bde',goal:30,step:10,unit:'minute'},
      {id:'walk',name:'Go for a walk',category:'Health',icon:'footsteps',color:'#7a8dd9',goal:6000,step:1000,unit:'step'},
      {id:'journal',name:'Write in journal',category:'Mind',icon:'pen',color:'#e77caa',goal:1,step:1,unit:'entry'},
      {id:'sleep',name:'Get enough sleep',category:'Lifestyle',icon:'moon',color:'#8069eb',goal:8,step:1,unit:'hour'},
      {id:'detox',name:'Screen-free time',category:'Lifestyle',icon:'clock',color:'#38b99d',goal:60,step:15,unit:'minute'}
    ];
    const $=s=>document.querySelector(s);
    const today=()=>{const d=new Date();return new Date(d.getFullYear(),d.getMonth(),d.getDate())};
    const dateKey=(date)=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
    const dateFromKey=(key)=>{const [y,m,d]=key.split('-').map(Number);return new Date(y,m-1,d)};
    const dateOffset=(date,days)=>{let d=new Date(date.getFullYear(),date.getMonth(),date.getDate());d.setDate(d.getDate()+days);return d};
    const dayDiff=(a,b)=>Math.round((Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())-Date.UTC(b.getFullYear(),b.getMonth(),b.getDate()))/864e5);
    const startOfWeek=(date)=>dateOffset(date,-(date.getDay()+6)%7);
    const formatShort=(date)=>date.toLocaleDateString('en-US',{month:'short',day:'numeric'});
    const formatDay=(date)=>date.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
    const escapeHTML=(x)=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const clamp=(val,min,max)=>Math.min(max,Math.max(min,val));
    const plural=(unit,n)=>n===1?unit:(unit==='entry'?'entries':unit==='glass'?'glasses':unit.endsWith('s')?unit:unit+'s');
    function normalizeUnitInput(raw){
      let unit=String(raw||'').trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu,' ').replace(/\s+/g,' ').trim();
      unit=unit.replace(/^\d+(?:[.,]\d+)?\s*/, '').trim();
      if(!unit)return 'time';
      const common={mins:'minute',minutes:'minute',minute:'minute',hrs:'hour',hours:'hour',hour:'hour',secs:'second',seconds:'second',second:'second',glasses:'glass',entries:'entry',steps:'step',pages:'page',sessions:'session'};
      if(common[unit]) return common[unit];
      if(!unit.includes(' ')){
        if(unit.endsWith('ies') && unit.length>3) unit=unit.slice(0,-3)+'y';
        else if(unit.endsWith('s') && !unit.endsWith('ss') && unit.length>3) unit=unit.slice(0,-1);
      }
      return unit.slice(0,20);
    }
    const validNumber=x=>Number.isFinite(Number(x))?Number(x):0;
    const soft=(hex)=>/^#[0-9a-fA-F]{6}$/.test(hex)?hex+'1e':'#8069eb1e';
    function updateCustomSelect(selectId){
      const select=$('#'+selectId); if(!select) return;
      const trigger=document.querySelector(`[data-select-trigger="${selectId}"]`);
      const valueEl=$('#'+selectId+'-value');
      const menu=$('#'+selectId+'-menu');
      const optionText=select.options[select.selectedIndex]?.textContent||'';
      if(valueEl) valueEl.textContent=optionText;
      if(trigger) trigger.setAttribute('aria-expanded', String(trigger.parentElement?.classList.contains('open')));
      menu?.querySelectorAll('[data-option-value]').forEach(btn=>btn.classList.toggle('active',btn.dataset.optionValue===select.value));
    }
    function closeCustomSelects(){
      document.querySelectorAll('.custom-select.open').forEach(el=>{
        el.classList.remove('open');
        el.querySelector('.custom-select-menu')?.classList.add('hidden');
        const trigger=el.querySelector('.custom-select-trigger'); if(trigger) trigger.setAttribute('aria-expanded','false');
      });
    }
    function toggleCustomSelect(selectId){
      const wrap=document.querySelector(`[data-select-trigger="${selectId}"]`)?.closest('.custom-select');
      if(!wrap) return; const isOpen=wrap.classList.contains('open');
      closeCustomSelects();
      if(!isOpen){wrap.classList.add('open'); wrap.querySelector('.custom-select-menu')?.classList.remove('hidden'); wrap.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded','true'); updateCustomSelect(selectId);} 
    }
    const initialDemo=()=>{
      const now=today(),logs={};
      const samples=[
        {water:6,read:20,workout:20,meditate:10,stretch:5,learn:10,walk:4000,journal:1,sleep:7,detox:30},
        {water:8,read:20,workout:30,meditate:10,stretch:10,learn:30,walk:6000,journal:1,sleep:8,detox:60},
        {water:8,read:15,workout:30,meditate:10,stretch:10,learn:20,walk:5000,journal:1,sleep:8,detox:30},
        {water:6,read:20,workout:10,meditate:10,stretch:10,learn:30,walk:6000,journal:1,sleep:7,detox:60},
        {water:8,read:20,workout:30,meditate:10,stretch:5,learn:30,walk:4000,journal:0,sleep:8,detox:45},
        {water:7,read:20,workout:0,meditate:5,stretch:10,learn:30,walk:6000,journal:1,sleep:8,detox:45},
        {water:8,read:15,workout:30,meditate:10,stretch:10,learn:10,walk:6000,journal:1,sleep:7,detox:60}
      ];
      for(let i=0;i<7;i++) logs[dateKey(dateOffset(now,-i))]=samples[i];
      return {habits:structuredClone(defaultHabits),categories:[...DEFAULT_CATEGORIES],categoryIcons:{...DEFAULT_CATEGORY_ICONS},logs,theme:'light',demo:true,awards:[]};
    };
    // Dayflow 2.0: schedule-aware, dated habits. Old storage is upgraded in place.
    const DEFAULT_SCHEDULE=()=>({type:'daily',days:[0,1,2,3,4,5,6],weeklyTarget:3});
    function validSchedule(v){
      if(!v||typeof v!=='object')return DEFAULT_SCHEDULE();
      const type=['daily','days','weekly'].includes(v.type)?v.type:'daily';
      const days=[...new Set((Array.isArray(v.days)?v.days:[]).map(Number).filter(x=>Number.isInteger(x)&&x>=0&&x<7))].sort();
      return {type,days:type==='days'?days:[0,1,2,3,4,5,6],weeklyTarget:clamp(Math.round(validNumber(v.weeklyTarget)||3),1,7)};
    }
    function hydrate(raw){
      const cats=mergedCategories(raw.categories,raw.habits||[]);
      const savedKeys=Object.keys(raw.logs||{}).filter(k=>/^\d{4}-\d\d-\d\d$/.test(k)).sort();
      const earliest=savedKeys[0]||dateKey(today());
      const habits=(raw.habits||[]).map(h=>({ ...h,
        schedule:validSchedule(h.schedule),
        createdAt:/^\d{4}-\d\d-\d\d$/.test(h.createdAt||'')?h.createdAt:earliest,
        archivedAt:/^\d{4}-\d\d-\d\d$/.test(h.archivedAt||'')?h.archivedAt:null
      }));
      const obj={...raw,habits,categories:cats,categoryIcons:normalizeCategoryIcons(raw.categoryIcons,cats),logs:raw.logs||{},snapshots:raw.snapshots||{},awards:Array.isArray(raw.awards)?raw.awards.filter(v=>MILESTONES.some(m=>m.days===v)):[],theme:raw.theme==='dark'?'dark':'light',demo:!!raw.demo,modifiedAt:raw.modifiedAt||new Date().toISOString()};
      // Migrate old data once, preserving the goal and habit list for dates already recorded.
      if(!raw.modelVersion){
        const first=earliest;
        let d=dateFromKey(first),last=dateOffset(today(),-1),limit=0;
        while(dayDiff(d,last)<=0 && limit++<1096){const key=dateKey(d);if(!obj.snapshots[key])obj.snapshots[key]=habits.filter(h=>h.createdAt<=key).map(snapshotHabit);d=dateOffset(d,1)}
      }
      obj.modelVersion=2;
      return obj;
    }
    function snapshotHabit(h){return {id:h.id,name:h.name,category:h.category,icon:h.icon,color:h.color,goal:h.goal,step:h.step,unit:h.unit,schedule:validSchedule(h.schedule),createdAt:h.createdAt,archivedAt:h.archivedAt||null};}
    function loadState(){
      try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){const loaded=JSON.parse(raw);if(Array.isArray(loaded.habits)&&loaded.logs&&typeof loaded.logs==='object')return hydrate(loaded)}}
      catch(e){console.warn('Could not load saved tracker data',e)}
      return hydrate(initialDemo());
    }
    let state=loadState(),selectedDate=today(),calendarMonth=new Date(today().getFullYear(),today().getMonth(),1),filter='All',search='',editingId=null,chosenIcon='sparkles',chosenColor=colorChoices[0],chosenCategory='Health',chosenCategoryIcon='sparkles',iconGroup='All',emojiSearch='',toastTimeout;
    function save(){
      state.modifiedAt=new Date().toISOString();
      try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));window.dispatchEvent(new Event('dayflow:saved'))}
      catch(e){toast('Browser storage is unavailable. Export a backup to save changes.')}
    }
    function snapshotPast(){
      const earliest=state.habits.map(h=>h.createdAt).sort()[0]||dateKey(today());
      let d=dateFromKey(earliest),end=dateOffset(today(),-1),i=0;
      while(dayDiff(d,end)<=0&&i++<1096){const key=dateKey(d);if(!state.snapshots[key])state.snapshots[key]=state.habits.filter(h=>h.createdAt<=key&&(!h.archivedAt||h.archivedAt>key)).map(snapshotHabit);d=dateOffset(d,1)}
    }
    function habitSet(date){
      const key=dateKey(date);
      if(key<dateKey(today()) && Object.hasOwn(state.snapshots,key))return state.snapshots[key];
      return state.habits.filter(h=>h.createdAt<=key&&(!h.archivedAt||h.archivedAt>key));
    }
    function dueHabit(date,h){
      const sch=validSchedule(h.schedule);
      if(sch.type==='weekly')return false; // flexible weekly items never penalize missed calendar days
      return sch.type==='daily'||sch.days.includes((date.getDay()+6)%7);
    }
    function trackedHabits(date){return habitSet(date).filter(h=>dueHabit(date,h))}
    function weekSessions(date,h){const d=startOfWeek(date);return Array.from({length:7},(_,i)=>dateOffset(d,i)).filter(x=>dayDiff(x,today())<=0 && habitSet(x).some(p=>p.id===h.id&&completed(x,p))).length}
    function getAmount(date,id){return Math.max(0,validNumber((state.logs[dateKey(date)]||{})[id]))}
    function completed(date,h){return getAmount(date,h.id)>=h.goal}
    function dayStats(date){
      const due=trackedHabits(date),n=due.length;
      const done=due.filter(h=>completed(date,h)).length;
      const avg=n?due.reduce((sum,h)=>sum+Math.min(1,getAmount(date,h.id)/h.goal),0)/n:0;
      const active=habitSet(date).some(h=>completed(date,h));
      return {done,total:n,percent:Math.round(avg*100),active,perfect:n>0&&done===n};
    }
    window.DayflowBridge={read:()=>JSON.parse(JSON.stringify(state)),replace:raw=>{state=hydrate(raw);try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch{};document.body.classList.toggle('dark',state.theme==='dark');$('#theme-toggle-icon').innerHTML=icon(state.theme==='dark'?'sun':'moon');$('#settings-dark-toggle').checked=state.theme==='dark';render();}};
    function currentStreak(){
      let end=today(),streak=0;
      if(!dayStats(end).active)end=dateOffset(end,-1);
      for(let i=0;i<3660;i++){
        if(dayStats(end).active){streak++;end=dateOffset(end,-1)}else break;
      }
      return streak;
    }
    /* Highest run across actual saved days. Once awarded, badges stay earned even if a streak breaks. */
    function bestStreak(){
      const activeDays=Object.keys(state.logs).filter(key=>/^\d{4}-\d{2}-\d{2}$/.test(key) && dayDiff(dateFromKey(key),today())<=0 && dayStats(dateFromKey(key)).active).sort();
      let best=0,run=0,last=null;
      for(const key of activeDays){const d=dateFromKey(key);run=last&&dayDiff(d,last)===1?run+1:1;best=Math.max(best,run);last=d}
      return best;
    }
    function badgeStatus(){return Math.max(bestStreak(),...(state.awards||[]),0)}
    function syncAwards(shouldCelebrate=false){
      if(state.demo)return;
      const best=bestStreak(),prev=new Set(state.awards||[]);
      const newly=MILESTONES.filter(t=>best>=t.days&&!prev.has(t.days));
      if(newly.length){state.awards=[...new Set([...prev,...newly.map(t=>t.days)])].sort((a,b)=>a-b);save();if(shouldCelebrate)showCelebration(newly[newly.length-1]);}
    }
    function renderBadges(){
      const streak=currentStreak(),best=badgeStatus();
      $('#badge-ladder').innerHTML=MILESTONES.map(t=>{
        const isEarned=best>=t.days,isDemo=state.demo&&best>=t.days;
        const daysRemaining=Math.max(0,t.days-streak);
        return `<button type="button" class="badge-step ${isEarned?'unlocked':'locked'}" data-badge-days="${t.days}" style="--badge-color:${t.accent};--badge-soft:${t.soft};--badge-outline:${t.outline};--badge-shadow:${t.shadow}" aria-label="${t.days}-day ${t.name} badge: ${isEarned?(isDemo?'example preview':'earned'):`locked, ${daysRemaining} days to go`}" title="${t.name} — ${t.days} day streak${isEarned?' · '+(isDemo?'Sample progress':'Unlocked'):''}">
          <span class="badge-art">${flameArt(t,62)}${isEarned&&!isDemo?'<span class="badge-tick">✓</span>':''}</span><strong>${t.days}d</strong><span>${isEarned?(isDemo?'Demo':'Earned'):t.name}</span></button>`;
      }).join('');
      const next=MILESTONES.find(t=>streak<t.days);
      $('#badge-bottom').innerHTML=`<span>${state.demo?'Sample badges · start fresh to track yours':best?'✨ Best streak: '+best+' days':'Complete 1 habit daily to begin'}</span>${next?`<b>${next.days-streak} days to ${next.name}</b>`:'<b>Legendary streak ✦</b>'}`;
    }
    let celebrationReturnFocus=null;
    function showCelebration(m,preview=false){
      const t=m||MILESTONES[0];
      celebrationReturnFocus=document.activeElement;
      const root=$('#streak-celebration'),panel=$('#celebration-card'),next=MILESTONES.find(tier=>tier.days>t.days);
      panel.style.setProperty('--celebrate-glow',t.glow);panel.style.setProperty('--celebrate-accent',t.accent);
      panel.style.setProperty('--celebrate-soft',t.days>=100?'#372048':'#422a36');panel.style.setProperty('--celebrate-ray',t.accent+'33');
      $('#celebration-title').innerHTML=preview?`${t.days}-day <span class="accent-text">flame preview</span>`:`Streak <span class="accent-text">${t.days===3?'unlocked!':'upgraded!'}</span>`;
      panel.querySelector('.celebration-eyebrow').textContent=preview?'✦ BADGE PREVIEW ✦':`✦ ${t.days}-DAY MILESTONE ✦`;
      $('#celebration-description').innerHTML=preview?`See the ${t.name} flame you can earn after <strong>${t.days} consecutive days.</strong>`:`You've completed a habit for <strong>${t.days} consecutive days.</strong> That's amazing!`;
      $('#celebration-flame').innerHTML=flameArt(t,210);
      $('#celebration-earned').textContent=preview?`${t.name.toUpperCase()} · PREVIEW`:`${t.name.toUpperCase()} BADGE UNLOCKED`;
      $('#celebration-next').textContent=preview?`Unlock at ${t.days} consecutive days ✦`:next?`Next color unlocks at ${next.days} days ✦`:'Every day adds to your legendary streak ✦';
      $('#celebration-go').innerHTML=preview?'Back to Dayflow <span aria-hidden="true">→</span>':'Keep it up <span aria-hidden="true">→</span>';
      const palette=[t.accent,t.base,t.tip,'#fff4bf','#ceb4ff','#fff'];
      $('#celebration-particles').innerHTML=Array.from({length:34},(_,i)=>{
        const angle=i*2.39996,radius=95+(i%6)*24,dx=Math.cos(angle)*radius,dy=Math.sin(angle)*radius;
        return `<i class="confetti-bit ${i%4===0?'star':''}" style="--x:${Math.round(dx)}px;--y:${Math.round(dy)}px;--r:${(i*59)%710}deg;--size:${4+(i%4)*3}px;--color:${palette[i%palette.length]};--delay:${i%8*65}ms;--dur:${950+i%5*170}ms;--radius:${i%3===0?'50%':'2px'}"></i>`;
      }).join('');
      root.classList.remove('hidden');document.body.style.overflow='hidden';$('#celebration-close').focus();
    }
    function closeCelebration(){const root=$('#streak-celebration');if(root.classList.contains('hidden'))return;root.classList.add('hidden');document.body.style.overflow='';if(celebrationReturnFocus?.isConnected)celebrationReturnFocus.focus();}
    function weekStats(date){
      const first=startOfWeek(date),days=Array.from({length:7},(_,i)=>dateOffset(first,i)),included=days.filter(d=>dayDiff(d,today())<=0&&dayStats(d).total>0),n=included.length||1;
      return {days,avg:Math.round(included.reduce((s,d)=>s+dayStats(d).percent,0)/n),active:included.filter(d=>dayStats(d).active).length};
    }
    function setTheme(value){state.theme=value==='dark'?'dark':'light';document.body.classList.toggle('dark',state.theme==='dark');$('#theme-toggle-icon').innerHTML=icon(state.theme==='dark'?'sun':'moon');$('#settings-dark-toggle').checked=state.theme==='dark';save()}
    function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),2800)}
    function renderHeader(){
      const diff=dayDiff(selectedDate,today()),isToday=diff===0;
      $('#top-date-label').textContent=formatDay(today());
      $('#hero-title').innerHTML=(isToday?'Make today count':diff<0?'Review your progress':'Plan your next win')+' <span aria-hidden="true">✦</span>';
      $('#hero-subtitle').textContent=isToday?'Keep showing up. Every small step is a win.':`${formatDay(selectedDate)} · Your habits, your pace.`;
      $('#today-button').textContent=isToday?'Today':formatShort(selectedDate);
      $('#habit-day-label').textContent=`${isToday?'Today':formatShort(selectedDate)} · Only scheduled habits count toward the daily total.`;
      $('#demo-strip').classList.toggle('hidden',!state.demo);
    }
    function renderStats(){
      const s=dayStats(selectedDate),week=weekStats(selectedDate),streak=currentStreak();
      $('#completion-count').innerHTML=`${s.done} <span style="font-size:17px;letter-spacing:-.4px;color:var(--ink-light);font-weight:600">/ ${s.total}</span>`;
      $('#completion-desc').textContent=`Habits finished / scheduled ${dayDiff(selectedDate,today())===0?'today':'on this day'}`;
      $('#global-percent').textContent=s.percent+'%';$('#global-ring').style.setProperty('--pct',s.percent);
      $('.completion-stat').classList.toggle('day-all-complete',s.perfect);
      $('#streak-value').textContent=streak;
      $('#streak-note').textContent=streak>0?`${streak} consecutive active ${streak===1?'day':'days'}`:'Finish one habit to start';
      const tier=tierFor(streak),next=MILESTONES.find(t=>streak<t.days);
      $('#streak-stat').dataset.stage=String(tier?.days||0);
      $('#streak-stat').style.setProperty('--streak-glow',tier?.glow||'#ff9e3728');
      $('#streak-stat').style.setProperty('--streak-accent',tier?.accent||'#f69b40');
      $('#streak-stat-flame').innerHTML=flameArt(tier||MILESTONES[0],67);
      $('#streak-stat-flame').style.opacity=streak?1:.35;
      $('#streak-tier-name').textContent=tier?`${tier.name} ${tier.days}d`:'No badge yet';
      $('#streak-next').textContent=next?`${Math.max(0,next.days-streak)} more consecutive ${next.days-streak===1?'day':'days'} to your ${next.name} badge`:'The highest flame is yours! Keep going.';
      $('#weekly-stat').textContent=week.avg;$('#weekly-orb').style.setProperty('--pct',week.avg);$('#weekly-progress-track').style.width=week.avg+'%';
      $('#weekly-progress-track').parentElement.classList.toggle('week-perfect',week.avg===100);
      $('#weekly-note').textContent=`${week.active} active ${week.active===1?'day':'days'} this week`;
    }
    function habitMarkup(h){
      const amount=getAmount(selectedDate,h.id),percent=clamp(Math.round(amount/h.goal*100),0,100),isComplete=amount>=h.goal,optional=validSchedule(h.schedule).type==='weekly',readOnly=!state.habits.some(x=>x.id===h.id&&!x.archivedAt);
      const weeklyLabel=optional?` · ${weekSessions(selectedDate,h)}/${validSchedule(h.schedule).weeklyTarget} weekly sessions`:'';
      const unit=plural(normalizeUnitInput(h.unit),h.goal),currentAmount=Math.round(amount*100)/100;
      const color=/^#[0-9a-f]{6}$/i.test(h.color)?h.color:colorChoices[0];
      return `<article class="habit-item ${isComplete?'is-complete':''}" style="--habit-color:${color};--habit-soft:${soft(color)};--pct:${percent};" data-habit-id="${escapeHTML(h.id)}">
        <div class="habit-ring" style="--ring-progress:${percent}%" aria-label="${percent}% completed"><div class="habit-ring-center"><span class="habit-icon">${livelyIcon(h.icon,25)}</span></div></div>
        <div class="habit-info"><div class="habit-name">${escapeHTML(h.name)}</div><div class="habit-meta"><span>${currentAmount.toLocaleString('en-US')} / ${h.goal.toLocaleString('en-US')} ${escapeHTML(unit)}</span><i class="meta-point"></i><span>${escapeHTML(h.category)}${optional?` <span class="optional-tag">Flexible weekly</span>`:''}</span></div><div class="habit-meter"><div class="small-track"><div class="small-fill" style="--pct:${percent}%"></div></div><span>${percent}%${optional?` · ${weekSessions(selectedDate,h)}/${validSchedule(h.schedule).weeklyTarget}wk`:''}</span></div></div>
        <div class="habit-actions"><div class="stepper"><button type="button" data-habit-action="decrease" aria-label="Decrease ${escapeHTML(h.name)}" ${amount===0?'disabled':''}>${icon('minus',13)}</button><strong>${h.step>=1000?(h.step/1000)+'k':'+'+h.step}</strong><button type="button" data-habit-action="increase" aria-label="Add ${h.step} ${escapeHTML(h.unit)} to ${escapeHTML(h.name)}" ${isComplete?'disabled':''}>${icon('plus',13)}</button></div><button class="done-button ${isComplete?'completed':''}" data-habit-action="toggle" aria-label="${isComplete?'Reset':'Complete'} ${escapeHTML(h.name)}">${icon('check',14)}<span>${isComplete?'Done':'Finish'}</span></button><button type="button" class="edit-button" data-habit-action="edit" aria-label="Edit ${escapeHTML(h.name)}" ${readOnly?'disabled':''}>${icon('settings',15)}</button></div>
      </article>`;
    }
    function renderHabits(){
      const available=mergedCategories(state.categories,state.habits);
      if(filter!=='All'&&!available.includes(filter))filter='All';
      $('#habit-filters').innerHTML=['All',...available].map(c=>`<button type="button" class="filter ${filter===c?'active':''}" data-filter="${escapeHTML(c)}" aria-pressed="${filter===c}">${c==='All'?'All habits':escapeHTML(c)}</button>`).join('');
      const scheduled=habitSet(selectedDate).filter(h=>dueHabit(selectedDate,h)||validSchedule(h.schedule).type==='weekly');
      const matches=scheduled.filter(h=>(filter==='All'||h.category===filter)&&h.name.toLowerCase().includes(search.toLowerCase()));
      $('#habits-count').textContent=`${trackedHabits(selectedDate).length} scheduled · ${scheduled.filter(h=>validSchedule(h.schedule).type==='weekly').length} flexible`;
      $('#habit-list').innerHTML=matches.length?matches.map(habitMarkup).join(''):`<div class="empty"><div class="empty-icon">${icon('calendar',24)}</div><h3>Nothing scheduled here</h3><p>${state.habits.length?'Try another day or filter.':'Add your first habit to get started.'}</p></div>`;
    }
    function renderCalendar(){
      $('#calendar-month').textContent=calendarMonth.toLocaleDateString('en-US',{month:'long',year:'numeric'});
      const y=calendarMonth.getFullYear(),m=calendarMonth.getMonth(),firstWeekDay=(new Date(y,m,1).getDay()+6)%7,daysInMonth=new Date(y,m+1,0).getDate();
      const totalCells=Math.ceil((firstWeekDay+daysInMonth)/7)*7;
      let html=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div class="day-name">${d}</div>`).join('');
      for(let i=0;i<totalCells;i++){
        const d=new Date(y,m,i-firstWeekDay+1),day=dateKey(d),s=dayStats(d),isOther=d.getMonth()!==m;
        const cls=['cal-day',isOther?'other':'',dateKey(selectedDate)===day?'selected':'',dateKey(today())===day?'today':'',s.percent>=75?'heavy':s.percent>=25?'mid':''].filter(Boolean).join(' ');
        html+=`<button class="${cls}" data-date="${day}" aria-label="${escapeHTML(formatDay(d))}: ${s.percent}% progress" aria-pressed="${dateKey(selectedDate)===day}">${d.getDate()}${s.percent>0?'<i class="cal-dot"></i>':''}</button>`;
      }
      $('#calendar-grid').innerHTML=html;
    }
    function renderWeek(){
      const w=weekStats(selectedDate),[first,last]=[w.days[0],w.days[6]];
      $('#weekly-date-range').textContent=`${formatShort(first)} – ${formatShort(last)} · Monday to Sunday`;
      $('#weekly-summary-value').textContent=w.avg+'%';
      $('#week-completed-note').textContent=`${w.active} of ${w.days.filter(d=>dayDiff(d,today())<=0).length} days active`;
      const labels=['M','T','W','T','F','S','S'];
      $('#week-chart').innerHTML=w.days.map((d,i)=>{const pct=dayStats(d).percent,isToday=dayDiff(d,today())===0,future=dayDiff(d,today())>0;return `<div class="week-col ${isToday?'today':''} ${future?'future':''} ${pct===100?'all-done':''}" title="${escapeHTML(formatDay(d))} — ${pct}%"><div class="week-bar-box"><div class="week-bar" style="--bar:${pct}%"></div></div><label>${labels[i]}</label></div>`}).join('');
      const ranked=state.habits.filter(h=>!h.archivedAt).map(h=>({...h,days:w.days.filter(d=>dayDiff(d,today())<=0&&habitSet(d).some(x=>x.id===h.id&&completed(d,x))).length})).sort((a,b)=>b.days-a.days).slice(0,3);
      $('#leader-list').innerHTML=ranked.length?ranked.map((h,i)=>`<div class="leader-item"><span class="medal">${i+1}</span><div class="leader-icon" style="--hsoft:${soft(h.color)};--hcolor:${h.color}">${livelyIcon(h.icon,24)}</div><div class="leader-info"><strong>${escapeHTML(h.name)}</strong><span>${escapeHTML(h.category)}</span></div><span class="leader-count">${h.days}/7</span></div>`).join(''):'<p class="subhead">Create a habit to see your weekly highlights.</p>';
    }
    function render(){renderHeader();renderStats();renderHabits();renderCalendar();renderWeek();renderBadges();renderTrends()}

    const reduceMotion=()=>window.matchMedia?.('(prefers-reduced-motion: reduce)').matches||false;
    // Confetti is visual-only and mounted outside the list, so re-rendering cannot cancel a burst.
    function burstAt(element,color='#8069eb',count=18){
      if(!element||reduceMotion())return;
      const box=element.getBoundingClientRect();if(!box.width||!box.height)return;
      const host=$('#effect-layer'),cx=box.left+box.width/2,cy=box.top+box.height/2;
      const palette=[color,'#ffffff','#f9c86d','#b89afa','#56d7bd'];
      const frag=document.createDocumentFragment();
      const ring=document.createElement('span');ring.className='fx-ring';
      ring.style.cssText=`--fx-left:${cx}px;--fx-top:${cy}px;--fx-color:${color}`;
      frag.appendChild(ring);
      for(let i=0;i<count;i++){
        const angle=(i/count)*Math.PI*2+.2,radius=34+(i%5)*13,el=document.createElement('i');
        el.className='fx-particle '+(i%5===0?'fx-star':i%4===0?'fx-spark':'');
        const x=Math.cos(angle)*radius,y=Math.sin(angle)*radius-22;
        el.style.cssText=`--fx-left:${cx}px;--fx-top:${cy}px;--fx-x:${x.toFixed(1)}px;--fx-y:${y.toFixed(1)}px;--fx-rotation:${i*69}deg;--fx-size:${5+i%3*3}px;--fx-color:${palette[i%palette.length]};--fx-radius:${i%3===0?'50%':'2px'};--fx-delay:${i%4*24}ms;--fx-duration:${900+i%5*90}ms`;
        frag.appendChild(el);
      }
      const nodes=Array.from(frag.childNodes);
      host.appendChild(frag);
      setTimeout(()=>nodes.forEach(el=>el.remove()),1450);
    }

    function animateHabitProgress(id,fromPct,toPct){
      if(reduceMotion()||fromPct===toPct)return;
      const item=[...document.querySelectorAll('#habit-list [data-habit-id]')].find(el=>el.dataset.habitId===id);
      if(!item)return;
      const circle=item.querySelector('.habit-ring'),bar=item.querySelector('.small-fill');
      circle.style.setProperty('--ring-progress',fromPct+'%');
      bar.style.setProperty('--pct',fromPct+'%');
      // Force browser to commit the previous geometry before transitioning to the new value.
      void circle.offsetWidth;
      requestAnimationFrame(()=>{
        if(!circle.isConnected)return;
        circle.style.setProperty('--ring-progress',toPct+'%');
        bar.style.setProperty('--pct',toPct+'%');
      });
    }
    function animatePerfectWeek(day){
      if(reduceMotion())return;
      const start=startOfWeek(selectedDate),index=dayDiff(day,start),column=$('#week-chart').children[index];
      if(column?.classList.contains('all-done')){
        column.classList.add('just-perfected');
        setTimeout(()=>column.classList.remove('just-perfected'),1300);
      }
    }
    function setAmount(id,val){
      const h=habitSet(selectedDate).find(h=>h.id===id);if(!h)return;
      if(dayDiff(selectedDate,today())>0){toast('You can plan future habits, but log them on the day.');return}
      const wasComplete=completed(selectedDate,h),key=dateKey(selectedDate),before=dayStats(selectedDate);
      const prevPct=Math.round(Math.min(1,getAmount(selectedDate,id)/h.goal)*100);
      if(key<dateKey(today())&&!state.snapshots[key])state.snapshots[key]=habitSet(selectedDate).map(snapshotHabit);
      if(!state.logs[key])state.logs[key]={};state.logs[key][id]=clamp(val,0,h.goal);
      save();render();
      $('#global-ring').classList.remove('stat-refreshed');void $('#global-ring').offsetWidth;$('#global-ring').classList.add('stat-refreshed');
      const nowComplete=completed(selectedDate,h),nextPct=Math.round(Math.min(1,getAmount(selectedDate,id)/h.goal)*100);
      animateHabitProgress(id,prevPct,nextPct);
      if(!wasComplete && nowComplete){
        const item=[...document.querySelectorAll('#habit-list [data-habit-id]')].find(el=>el.dataset.habitId===id);
        if(item){item.classList.add('habit-just-finished');burstAt(item.querySelector('.done-button'),h.color,18);setTimeout(()=>item.classList.remove('habit-just-finished'),900)}
      }
      if(!before.perfect&&dayStats(selectedDate).perfect){
        $('.completion-stat').classList.add('day-all-just-finished');burstAt($('#global-ring'),h.color,28);animatePerfectWeek(selectedDate);
        setTimeout(()=>$('.completion-stat')?.classList.remove('day-all-just-finished'),1300);toast('Perfect day! Every scheduled habit is done ✨');
      }
      syncAwards(true);renderBadges();renderStats();
    }
    function changeDate(date){selectedDate=new Date(date.getFullYear(),date.getMonth(),date.getDate());calendarMonth=new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);render()}
    function setCategory(name){
      chosenCategory=name;
      $('#habit-category-input').value=name;
      $('#category-selected-name').textContent=name;
      $('#category-selected-icon').innerHTML=categoryIconMarkup(name,18);
      renderCategoryOptions();
    }
    function renderCategoryOptions(){
      $('#category-options').innerHTML=state.categories.map(c=>{
        const safe=escapeHTML(c),selected=c===chosenCategory,removable=!DEFAULT_CATEGORIES.includes(c);
        return `<div class="category-option-row"><button type="button" role="option" class="category-option ${selected?'selected':''}" data-category="${safe}" aria-selected="${selected}" tabindex="${selected?0:-1}"><span class="cat-emoji">${categoryIconMarkup(c,18)}</span><span class="cat-label">${safe}</span>${selected?`<span class="category-check">${icon('check',16)}</span>`:''}</button>${removable?`<button type="button" class="category-delete" data-delete-category="${safe}" aria-label="Delete ${safe} category" title="Delete ${safe}">${icon('trash',15)}</button>`:''}</div>`;
      }).join('');
    }
    function renderCategoryIconChoices(){
      const host=$('#category-icon-picker');
      if(!host)return;
      const query=($('#category-icon-search')?.value||'').trim().toLocaleLowerCase();
      const matches=iconCatalog.filter(item=>!query||item.label.toLocaleLowerCase().includes(query)||item.group.toLocaleLowerCase().includes(query)||item.emoji.includes(query));
      host.innerHTML=matches.length?matches.map(item=>`<button type="button" class="category-icon-choice ${chosenCategoryIcon===item.id?'active':''}" data-category-icon="${escapeHTML(item.id)}" title="${escapeHTML(item.label)}" aria-label="${escapeHTML(item.label)} icon" aria-pressed="${chosenCategoryIcon===item.id}">${livelyIcon(item.id,22)}</button>`).join(''):'<div class="category-icon-empty">No matching icons</div>';
      $('#category-icon-count').textContent=`${matches.length} icons`;
    }
    function removeCategory(name){
      if(!state.categories.includes(name)||DEFAULT_CATEGORIES.includes(name))return;
      const assigned=state.habits.filter(h=>h.category===name).length;
      const question=assigned?`Delete “${name}”? ${assigned} ${assigned===1?'habit uses':'habits use'} this category. ${assigned===1?'It':'They'} will be moved to Lifestyle; no progress will be lost.`:`Delete your “${name}” category?`;
      if(!window.confirm(question))return;
      // Reassign first so mergedCategories does not recreate the deleted name.
      for(const h of state.habits)if(h.category===name)h.category='Lifestyle';
      state.categories=state.categories.filter(c=>c!==name);delete state.categoryIcons[name];
      if(chosenCategory===name){chosenCategory='Lifestyle';$('#habit-category-input').value='Lifestyle';$('#category-selected-name').textContent='Lifestyle';$('#category-selected-icon').innerHTML=categoryIconMarkup('Lifestyle',18)}
      if(filter===name)filter='All';
      save();renderCategoryOptions();renderHabits();
      $('#category-feedback').textContent='';
      toast(assigned?`${name} removed · ${assigned} ${assigned===1?'habit moved':'habits moved'} to Lifestyle`:`${name} category removed`);
    }
    function setCategoryMenu(open){
      $('#category-popover').classList.toggle('hidden',!open);
      $('#habit-category-trigger').classList.toggle('open',open);
      $('#habit-category-trigger').setAttribute('aria-expanded',String(open));
      if(!open){$('#category-feedback').textContent='';$('#new-category-input').value='';$('#category-icon-search').value='';chosenCategoryIcon='sparkles';renderCategoryIconChoices();}
    }
    function addCategory(){
      const input=$('#new-category-input'),raw=input.value.trim(),name=cleanCategoryName(raw);
      const feedback=$('#category-feedback');
      if(!name){feedback.textContent='Enter a category name first.';input.focus();return;}
      if(['all','all habits'].includes(name.toLocaleLowerCase())){feedback.textContent='That name is reserved for filtering.';input.focus();return;}
      if(raw.length>24){feedback.textContent='Use 24 characters or fewer.';input.focus();return;}
      const existing=state.categories.find(c=>c.toLocaleLowerCase()===name.toLocaleLowerCase());
      if(existing){setCategory(existing);setCategoryMenu(false);toast(`Using ${existing}`);return;}
      if(state.categories.length>=60){feedback.textContent='Category limit reached.';return;}
      state.categories.push(name);state.categoryIcons[name]=chosenCategoryIcon;setCategory(name);setCategoryMenu(false);save();renderHabits();toast(`${name} category created!`);
    }
    function openHabit(id=null){
      editingId=id;const h=id?state.habits.find(h=>h.id===id):null;
      chosenIcon=h?.icon||'sparkles';chosenColor=h?.color||colorChoices[0];
      chosenCategory=h?.category||'Health';chosenCategoryIcon=categoryIconId(chosenCategory);iconGroup='All';emojiSearch='';
      $('#habit-modal-title').textContent=h?'Edit habit':'Create a habit';$('#save-habit-label').textContent=h?'Save changes':'Create habit';
      $('#delete-habit').classList.toggle('hidden',!h);$('#delete-habit').textContent='Archive habit';
      $('#habit-name-input').value=h?.name||'';$('#habit-unit-input').value=normalizeUnitInput(h?.unit||'time');
      $('#habit-goal-input').value=h?.goal||1;$('#habit-step-input').value=h?.step||1;
      $('#emoji-search-input').value='';setCategoryMenu(false);setCategory(chosenCategory);
      renderPickers();renderCategoryIconChoices();renderScheduleEditor(validSchedule(h?.schedule));$('#habit-modal-backdrop').classList.remove('hidden');$('#habit-name-input').focus();
    }
    function renderPickers(){
      const groups=['All','Wellness','Fitness','Focus','Lifestyle'];
      $('#emoji-filters').innerHTML=groups.map(g=>`<button type="button" data-emoji-group="${g}" class="emoji-filter ${iconGroup===g?'active':''}" aria-pressed="${iconGroup===g}">${g}</button>`).join('');
      const visible=iconCatalog.filter(item=>(iconGroup==='All'||item.group===iconGroup)&&(item.label.toLowerCase().includes(emojiSearch)||item.emoji.includes(emojiSearch)||item.group.toLowerCase().includes(emojiSearch)));
      $('#icon-picker').innerHTML=visible.length?visible.map(item=>`<button type="button" class="icon-choice ${item.id===chosenIcon?'active':''}" data-icon-choice="${escapeHTML(item.id)}" title="${escapeHTML(item.label)}" aria-label="${escapeHTML(item.label)}" aria-pressed="${item.id===chosenIcon}">${livelyIcon(item.id,29)}</button>`).join(''):`<div class="emoji-empty">No matching icons. Try another search ✨</div>`;
      $('#emoji-count').textContent=`${visible.length} icons`;
      $('#color-picker').innerHTML=colorChoices.map(c=>`<button type="button" class="color-choice ${c===chosenColor?'active':''}" style="--c:${c}" data-color-choice="${c}" title="${c}" aria-label="Color ${c}" aria-pressed="${c===chosenColor}"></button>`).join('');
    }
    function closeModal(selector){$(selector).classList.add('hidden');if(selector==='#habit-modal-backdrop')setCategoryMenu(false);editingId=null}
    function makeId(){return 'h'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
    function startFresh(){if(!confirm('Clear the example progress and start from zero? Your habit list will stay the same.'))return;state.logs={};state.demo=false;state.awards=[];save();render();toast('Fresh start! Your dashboard is all yours.');}
    function showSettings(){closeMobile();$('#settings-dark-toggle').checked=state.theme==='dark';renderArchived();$('#settings-modal-backdrop').classList.remove('hidden')}
    function showArchiveInbox(){closeMobile();renderArchived();$('#archive-modal-backdrop').classList.remove('hidden')}
    function readScheduleEditor(){
      const type=$('#habit-repeat-type').value;
      const days=[...document.querySelectorAll('#repeat-weekdays input:checked')].map(el=>Number(el.value));
      return validSchedule({type,days,weeklyTarget:Number($('#habit-weekly-target').value)});
    }
    function renderScheduleEditor(schedule=DEFAULT_SCHEDULE()){
      $('#habit-repeat-type').value=schedule.type;
      document.querySelectorAll('#repeat-weekdays input').forEach(el=>el.checked=schedule.days.includes(Number(el.value)));
      $('#habit-weekly-target').value=schedule.weeklyTarget;
      $('#repeat-weekdays').classList.toggle('hidden',schedule.type!=='days');
      $('#weekly-target-row').classList.toggle('hidden',schedule.type!=='weekly');
      $('#daily-target-label').textContent=schedule.type==='weekly'?'Target per session':'Daily target';
      updateCustomSelect('habit-repeat-type');
      updateCustomSelect('habit-weekly-target');
      const captions={daily:'Track this habit every day.',days:'Only count this habit on the weekdays you choose.',weekly:'Complete this habit any day of the week until you hit your session goal.'};
      $('#schedule-caption').textContent=captions[schedule.type]||captions.daily;
    }
    function renderTrends(){
      const now=today(),days=Array.from({length:30},(_,i)=>dateOffset(now,i-29));
      $('#consistency-grid').innerHTML=days.map(d=>{
        const st=dayStats(d),val=st.total?st.done/st.total:0,has=st.total>0;
        const level=!has?0:val===1?4:val>=.7?3:val>=.35?2:val>0?1:0;
        return `<button type="button" class="consistency-day tier-${level}" data-consistency-date="${dateKey(d)}" title="${escapeHTML(formatDay(d))} · ${st.done}/${st.total} scheduled habits finished" aria-label="${escapeHTML(formatDay(d))} ${st.done} of ${st.total} finished"></button>`
      }).join('');
      const prev=Array.from({length:7},(_,i)=>dateOffset(now,i-13)),curr=Array.from({length:7},(_,i)=>dateOffset(now,i-6));
      const avg=dates=>{const due=dates.filter(d=>dayStats(d).total>0);return due.length?Math.round(due.reduce((s,d)=>s+dayStats(d).percent,0)/due.length):0};
      const previous=avg(prev),current=avg(curr),delta=current-previous;
      $('#trend-week').textContent=`${delta>0?'+':''}${delta} pts`;
      $('#trend-week').className=`trend-delta ${delta>=0?'positive':'negative'}`;
      $('#trend-description').textContent=`${current}% in the last 7 days vs ${previous}% in the previous 7 days`;
      const start=dateOffset(now,-13),recent=Array.from({length:14},(_,i)=>dateOffset(start,i));
      const scores=state.habits.filter(h=>!h.archivedAt).map(h=>{
        const dates=recent.filter(d=>habitSet(d).some(x=>x.id===h.id&&dueHabit(d,x)));
        return {...h,score:dates.length?Math.round(100*dates.filter(d=>habitSet(d).some(x=>x.id===h.id&&completed(d,x))).length/dates.length):null,days:dates.length};
      }).filter(h=>h.days>0).sort((a,b)=>a.score-b.score).slice(0,3);
      $('#habit-insight-list').innerHTML=scores.length?scores.map(h=>`<div class="insight-row"><span>${livelyIcon(h.icon,20)} ${escapeHTML(h.name)}</span><strong>${h.score}%</strong></div>`).join(''):'<p class="subhead">Start tracking to see a habit breakdown.</p>';
      const weekly=state.habits.filter(h=>!h.archivedAt&&validSchedule(h.schedule).type==='weekly');
      $('#weekly-goals-list').innerHTML=weekly.length?weekly.map(h=>`<div class="insight-row"><span>${livelyIcon(h.icon,20)} ${escapeHTML(h.name)}</span><strong>${weekSessions(now,h)}/${validSchedule(h.schedule).weeklyTarget}</strong></div>`).join(''):'<p class="subhead">Create a weekly-goal habit to see its progress.</p>';
    }
    function renderArchived(){
      const archived=state.habits.filter(h=>h.archivedAt).sort((a,b)=>String(b.archivedAt||'').localeCompare(String(a.archivedAt||'')));
      const markup=archived.length?archived.map(h=>`<div class="archive-item"><div class="archive-item-main"><div class="archive-item-top">${livelyIcon(h.icon,22)} <span>${escapeHTML(h.name)}</span></div><div class="archive-item-note">${escapeHTML(h.category)} · Archived ${escapeHTML(h.archivedAt||dateKey(today()))} · ${h.goal.toLocaleString('en-US')} ${escapeHTML(plural(normalizeUnitInput(h.unit),h.goal))}</div></div><button type="button" data-restore-habit="${escapeHTML(h.id)}" class="secondary-btn">Restore</button></div>`).join(''):'<p class="subhead">No archived habits yet.</p>';
      $('#archived-list').innerHTML=markup;
      if($('#archive-inbox-list')) $('#archive-inbox-list').innerHTML=markup;
      if($('#archive-count')) $('#archive-count').textContent=`${archived.length} archived ${archived.length===1?'habit':'habits'}`;
    }
    function closeMobile(){$('#sidebar').classList.remove('open');$('#mobile-scrim').classList.remove('show')}
    $('#habit-list').addEventListener('click',e=>{
      const btn=e.target.closest('[data-habit-action]');if(!btn)return;
      const item=btn.closest('[data-habit-id]');if(!item)return;
      const h=state.habits.find(h=>h.id===item.dataset.habitId);if(!h)return;
      const a=btn.dataset.habitAction,value=getAmount(selectedDate,h.id);
      if(a==='increase')setAmount(h.id,value+h.step);
      if(a==='decrease')setAmount(h.id,value-h.step);
      if(a==='toggle'){setAmount(h.id,value>=h.goal?0:h.goal);if(value<h.goal)toast(`${h.name} completed! Nice work 🎉`)}
      if(a==='edit')openHabit(h.id);
    });
    $('#habit-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b){filter=b.dataset.filter;renderHabits()}});
    $('#habit-search').addEventListener('input',e=>{search=e.target.value;renderHabits()});
    $('#calendar-grid').addEventListener('click',e=>{const b=e.target.closest('[data-date]');if(b)changeDate(dateFromKey(b.dataset.date))});
    $('#prev-month').addEventListener('click',()=>{calendarMonth=new Date(calendarMonth.getFullYear(),calendarMonth.getMonth()-1,1);renderCalendar()});
    $('#next-month').addEventListener('click',()=>{calendarMonth=new Date(calendarMonth.getFullYear(),calendarMonth.getMonth()+1,1);renderCalendar()});
    $('#prev-day').addEventListener('click',()=>changeDate(dateOffset(selectedDate,-1)));
    $('#next-day').addEventListener('click',()=>changeDate(dateOffset(selectedDate,1)));
    $('#today-button').addEventListener('click',()=>changeDate(today()));
    ['#sidebar-add','#header-add','#list-add'].forEach(s=>$(s).addEventListener('click',()=>{closeMobile();openHabit()}));
    $('#archive-open').addEventListener('click',e=>{e.preventDefault();showArchiveInbox()});
    $('#habit-modal-close').addEventListener('click',()=>closeModal('#habit-modal-backdrop'));
    $('#cancel-habit').addEventListener('click',()=>closeModal('#habit-modal-backdrop'));
    $('#habit-category-trigger').addEventListener('click',()=>{const isOpen=$('#habit-category-trigger').getAttribute('aria-expanded')==='true';setCategoryMenu(!isOpen);if(!isOpen)$('#category-options .selected')?.focus({preventScroll:true})});
    $('#category-options').addEventListener('click',e=>{const remove=e.target.closest('[data-delete-category]');if(remove){removeCategory(remove.dataset.deleteCategory);return;}const b=e.target.closest('[data-category]');if(!b)return;setCategory(b.dataset.category);setCategoryMenu(false);$('#habit-category-trigger').focus()});
    $('#category-options').addEventListener('keydown',e=>{
      const options=[...$('#category-options').querySelectorAll('[data-category]')];let index=options.indexOf(document.activeElement);
      if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){
        e.preventDefault();index=e.key==='Home'?0:e.key==='End'?options.length-1:(index+(e.key==='ArrowDown'?1:-1)+options.length)%options.length;
        options.forEach(b=>b.tabIndex=-1);options[index].tabIndex=0;options[index].focus();
      }
      if(e.key==='Escape'){e.stopPropagation();setCategoryMenu(false);$('#habit-category-trigger').focus()}
    });
    $('#category-add').addEventListener('click',addCategory);
    $('#category-icon-picker').addEventListener('click',e=>{const b=e.target.closest('[data-category-icon]');if(!b)return;chosenCategoryIcon=b.dataset.categoryIcon;renderCategoryIconChoices();});
    $('#category-icon-search').addEventListener('input',renderCategoryIconChoices);
    $('#new-category-input').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addCategory()}});
    document.addEventListener('pointerdown',e=>{if(!$('#category-select-wrap').contains(e.target))setCategoryMenu(false); if(!e.target.closest('.custom-select')) closeCustomSelects();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape') closeCustomSelects();});
    $('#icon-picker').addEventListener('click',e=>{const b=e.target.closest('[data-icon-choice]');if(b){chosenIcon=b.dataset.iconChoice;renderPickers()}});
    $('#emoji-filters').addEventListener('click',e=>{const b=e.target.closest('[data-emoji-group]');if(b){iconGroup=b.dataset.emojiGroup;renderPickers()}});
    $('#emoji-search-input').addEventListener('input',e=>{emojiSearch=e.target.value.toLowerCase().trim();renderPickers()});
    $('#color-picker').addEventListener('click',e=>{const b=e.target.closest('[data-color-choice]');if(b){chosenColor=b.dataset.colorChoice;renderPickers()}});
    $('#habit-repeat-type').addEventListener('change',()=>{updateCustomSelect('habit-repeat-type');renderScheduleEditor(readScheduleEditor())});
    $('#habit-weekly-target').addEventListener('change',()=>updateCustomSelect('habit-weekly-target'));
    document.querySelectorAll('[data-select-trigger]').forEach(trigger=>trigger.addEventListener('click',e=>{e.preventDefault();toggleCustomSelect(trigger.dataset.selectTrigger)}));
    document.querySelectorAll('[data-option-for]').forEach(option=>option.addEventListener('click',e=>{const selectId=option.dataset.optionFor;const select=$('#'+selectId);if(!select)return;select.value=option.dataset.optionValue;select.dispatchEvent(new Event('change',{bubbles:true}));closeCustomSelects();}));
    $('#habit-unit-input').addEventListener('blur',e=>{e.target.value=normalizeUnitInput(e.target.value)});
    $('#consistency-grid').addEventListener('click',e=>{const b=e.target.closest('[data-consistency-date]');if(b)changeDate(dateFromKey(b.dataset.consistencyDate))});
    ['#archived-list','#archive-inbox-list'].forEach(sel=>$(sel)?.addEventListener('click',e=>{const b=e.target.closest('[data-restore-habit]');if(!b)return;const h=state.habits.find(h=>h.id===b.dataset.restoreHabit);if(!h)return;snapshotPast();h.archivedAt=null;h.createdAt=dateKey(today());save();renderArchived();render();toast(`${h.name} restored.`)}));
    $('#habit-form').addEventListener('submit',e=>{
      e.preventDefault();const name=$('#habit-name-input').value.trim(),unit=normalizeUnitInput($('#habit-unit-input').value),goal=Number($('#habit-goal-input').value),step=Number($('#habit-step-input').value);
      if(!name||!unit||!Number.isInteger(goal)||goal<1||goal>100000||!Number.isInteger(step)||step<1||step>100000){toast('Enter valid habit details and targets.');return}
      const schedule=readScheduleEditor();
      if(schedule.type==='days' && !schedule.days.length){toast('Select at least one weekday for this habit.');return}
      const payload={name,unit,goal,step,category:chosenCategory,icon:chosenIcon,color:chosenColor,schedule};
      snapshotPast();
      if(editingId){const i=state.habits.findIndex(h=>h.id===editingId);if(i>=0)state.habits[i]={...state.habits[i],...payload}}
      else state.habits.push({id:makeId(),createdAt:dateKey(today()),archivedAt:null,...payload});
      const wasEditing=!!editingId;save();closeModal('#habit-modal-backdrop');filter='All';search='';$('#habit-search').value='';render();toast(wasEditing?'Habit updated!':'New habit added!');
    });
    $('#delete-habit').addEventListener('click',()=>{
      if(!editingId)return;const target=state.habits.find(h=>h.id===editingId);if(!target)return;
      if(!confirm(`Archive "${target.name}"? It will disappear from upcoming days but its history will be preserved. You can restore it in Settings.`))return;
      snapshotPast();target.archivedAt=dateKey(today());save();closeModal('#habit-modal-backdrop');render();toast('Habit archived. Previous results preserved.');
    });
    $('#settings-open').addEventListener('click',showSettings);
    $('#settings-modal-close').addEventListener('click',()=>closeModal('#settings-modal-backdrop'));
    $('#archive-modal-close').addEventListener('click',()=>closeModal('#archive-modal-backdrop'));
    $('#archive-done').addEventListener('click',()=>closeModal('#archive-modal-backdrop'));
    $('#archive-go-settings').addEventListener('click',()=>{closeModal('#archive-modal-backdrop');showSettings()});
    $('#theme-toggle').addEventListener('click',()=>setTheme(state.theme==='dark'?'light':'dark'));
    $('#settings-dark-toggle').addEventListener('change',e=>setTheme(e.target.checked?'dark':'light'));
    $('#start-fresh').addEventListener('click',startFresh);
    $('#preview-badges').addEventListener('click',()=>showCelebration(MILESTONES[0],true));
    $('#badge-ladder').addEventListener('click',e=>{
      const b=e.target.closest('[data-badge-days]');if(!b)return;
      const tier=MILESTONES.find(t=>t.days===Number(b.dataset.badgeDays));if(!tier)return;
      showCelebration(tier,state.demo || badgeStatus()<tier.days);
    });
    $('#celebration-close').addEventListener('click',closeCelebration);
    $('#celebration-go').addEventListener('click',closeCelebration);
    $('#celebration-backdrop').addEventListener('click',closeCelebration);
    $('#reset-data').addEventListener('click',()=>{
      if(!confirm('Reset all habits and progress? This cannot be undone unless you have a backup.'))return;
      const theme=state.theme;state=hydrate({habits:structuredClone(defaultHabits),categories:[...DEFAULT_CATEGORIES],categoryIcons:{...DEFAULT_CATEGORY_ICONS},logs:{},snapshots:{},demo:false,theme,awards:[],modelVersion:2});
      filter='All';search='';$('#habit-search').value='';save();changeDate(today());closeModal('#settings-modal-backdrop');toast('Tracker reset. A fresh chapter begins!');
    });
    $('#export-data').addEventListener('click',()=>{
      const json=JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2);
      const url=URL.createObjectURL(new Blob([json],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=`dayflow-backup-${dateKey(today())}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);toast('Backup downloaded.');
    });
    $('#import-button').addEventListener('click',()=>$('#import-input').click());
    $('#import-input').addEventListener('change',async e=>{
      const file=e.target.files?.[0];if(!file)return;
      try{
        if(file.size>15000000)throw Error('File is too large (15 MB limit).');
        const data=JSON.parse(await file.text());
        if(!Array.isArray(data.habits)||!data.logs||typeof data.logs!=='object'||data.habits.length>500)throw Error('Not a valid Dayflow backup.');
        const cleaned=data.habits.map((h,i)=>({id:String(h.id||'import'+i).slice(0,100),name:String(h.name||'Habit').slice(0,48),category:cleanCategoryName(h.category)||'Lifestyle',icon:iconChoices.includes(h.icon)?h.icon:'sparkles',schedule:validSchedule(h.schedule),createdAt:h.createdAt,archivedAt:h.archivedAt,color:colorChoices.includes(h.color)?h.color:colorChoices[0],goal:clamp(Math.round(validNumber(h.goal)),1,100000),step:clamp(Math.round(validNumber(h.step)),1,100000),unit:normalizeUnitInput(String(h.unit||'time'))}));
        if(!confirm('Import this backup? Your current habits and history will be replaced.'))return;
        const cleanLogs={};for(const [key,log] of Object.entries(data.logs)){if(!/^\d{4}-\d{2}-\d{2}$/.test(key)||!log||typeof log!=='object')continue;cleanLogs[key]={};for(const h of cleaned){const n=Number(log[h.id]);if(Number.isFinite(n))cleanLogs[key][h.id]=clamp(n,0,h.goal)}}
        const categories=mergedCategories(data.categories,cleaned);state=hydrate({habits:cleaned,categories,categoryIcons:normalizeCategoryIcons(data.categoryIcons,categories),logs:cleanLogs,snapshots:data.snapshots,modelVersion:data.modelVersion,theme:data.theme==='dark'?'dark':'light',demo:false,awards:Array.isArray(data.awards)?data.awards.filter(v=>MILESTONES.some(t=>t.days===v)):[]});syncAwards(false);setTheme(state.theme);filter='All';search='';$('#habit-search').value='';save();changeDate(today());closeModal('#settings-modal-backdrop');toast('Backup imported successfully!');
      }catch(err){toast(err.message||'Could not read backup.')}finally{e.target.value=''}
    });
    document.querySelectorAll('.modal-backdrop').forEach(backdrop=>backdrop.addEventListener('click',e=>{if(e.target===backdrop)backdrop.classList.add('hidden')}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#habit-category-trigger').getAttribute('aria-expanded')==='true'){setCategoryMenu(false);$('#habit-category-trigger').focus();return;}closeCustomSelects();closeCelebration();$('#habit-modal-backdrop').classList.add('hidden');$('#settings-modal-backdrop').classList.add('hidden');$('#archive-modal-backdrop').classList.add('hidden');closeMobile()}if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&$('#habit-modal-backdrop').classList.contains('hidden')){e.preventDefault();$('#habit-search').focus()}});
    $('#menu-toggle').addEventListener('click',()=>{$('#sidebar').classList.add('open');$('#mobile-scrim').classList.add('show')});
    $('#mobile-scrim').addEventListener('click',closeMobile);
    document.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click',()=>{
      const id=b.dataset.nav;document.querySelectorAll('[data-nav]').forEach(el=>el.classList.toggle('active',el===b));
      closeMobile();document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
    }));
    // First paint: one gentle progress sweep. No ambient animations or repeated scroll effects.
    function animateFirstPaint(){
      if(reduceMotion())return;
      const rings=[...document.querySelectorAll('#habit-list .habit-ring')].map(el=>[el,el.style.getPropertyValue('--ring-progress')]);
      const meters=[...document.querySelectorAll('#habit-list .small-fill')].map(el=>[el,el.style.getPropertyValue('--pct')]);
      const columns=[...document.querySelectorAll('#week-chart .week-bar')].map(el=>[el,el.style.getPropertyValue('--bar')]);
      for(const [el] of rings)el.style.setProperty('--ring-progress','0%');
      for(const [el] of meters)el.style.setProperty('--pct','0%');
      for(const [el] of columns)el.style.setProperty('--bar','0%');
      void document.body.offsetWidth;
      requestAnimationFrame(()=>requestAnimationFrame(()=>{
        for(const [el,pct] of rings)if(el.isConnected)el.style.setProperty('--ring-progress',pct);
        for(const [el,pct] of meters)if(el.isConnected)el.style.setProperty('--pct',pct);
        for(const [el,pct] of columns)if(el.isConnected)el.style.setProperty('--bar',pct);
      }));
    }
    syncAwards(false);setTheme(state.theme);render();animateFirstPaint();
    })();
  
