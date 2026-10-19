/* Dayflow daily reminder — local, in-browser scheduling.
 * This does not provide push notifications while every Dayflow tab is closed.
 * No sensitive user data leaves the device.
 */
(() => {
  'use strict';
  const KEY = 'dayflow_daily_reminder_v1';
  const FIRED_KEY = 'dayflow_daily_reminder_fired_v1';
  const LEAD_MINUTES = 5;
  const GRACE_MS = 90000;
  const $ = selector => document.querySelector(selector);
  const nodes = {
    toggle: $('#dayflow-reminder-enabled'),
    time: $('#dayflow-reminder-time'),
    controls: $('#dayflow-reminder-controls'),
    status: $('#dayflow-reminder-status'),
    upcoming: $('#dayflow-reminder-upcoming'),
    preview: $('#dayflow-reminder-preview'),
    permission: $('#dayflow-reminder-permission'),
    alert: $('#dayflow-reminder-alert'),
    alertTitle: $('#dayflow-reminder-alert-title'),
    alertCopy: $('#dayflow-reminder-alert-copy'),
    alertClose: $('#dayflow-reminder-alert-dismiss'),
    alertOpen: $('#dayflow-reminder-alert-open'),
  };
  if (Object.values(nodes).some(el => !el)) return;

  const isValidTime = value => /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
  const load = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
      return {enabled: saved.enabled === true, time: isValidTime(saved.time) ? saved.time : '07:00'};
    } catch (_) { return {enabled: false, time: '07:00'}; }
  };
  let settings = load();
  const picker = {
    trigger: $('#dayflow-reminder-time-trigger'),
    display: $('#dayflow-time-display'),
    editor: $('#dayflow-time-editor'),
    hour: $('#dayflow-time-hour'),
    minute: $('#dayflow-time-minute'),
    period: document.querySelectorAll('[data-time-period]'),
    preview: $('#dayflow-time-preview-text'),
    save: $('#dayflow-time-save'),
    cancel: $('#dayflow-time-cancel')
  };
  // Keep the existing 24-hour saved preference. The custom editor is presentation only.
  let pickerPeriod = 'AM';
  const twoDigits = n => String(n).padStart(2, '0');
  function formatted12(h24, minute) {
    return `${h24 % 12 || 12}:${twoDigits(minute)} ${h24 < 12 ? 'AM' : 'PM'}`;
  }
  function displayTime() {
    const [h, m] = settings.time.split(':').map(Number);
    if (picker.display) picker.display.textContent = formatted12(h, m);
  }
  function timePartsFrom24(timeString) {
    const [h, m] = timeString.split(':').map(Number);
    return {hour: h % 12 || 12, minute: m, period: h >= 12 ? 'PM' : 'AM'};
  }
  function setDraftFromMinutes(total) {
    const minutes = (total % 1440 + 1440) % 1440;
    const h = Math.floor(minutes / 60), m = minutes % 60;
    picker.hour.value = twoDigits(h % 12 || 12);
    picker.minute.value = twoDigits(m);
    pickerPeriod = h >= 12 ? 'PM' : 'AM';
    syncDraft();
  }
  function draftToMinutes() {
    const hRaw = picker.hour.value.trim(), mRaw = picker.minute.value.trim();
    if (!/^\d{1,2}$/.test(hRaw) || !/^\d{1,2}$/.test(mRaw)) return null;
    const h = Number(hRaw), m = Number(mRaw);
    if (h < 1 || h > 12 || m < 0 || m > 59) return null;
    return ((h % 12) + (pickerPeriod === 'PM' ? 12 : 0)) * 60 + m;
  }
  function syncDraft() {
    picker.period.forEach(button => {
      const isActive = button.dataset.timePeriod === pickerPeriod;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    const total = draftToMinutes();
    picker.save.disabled = total === null;
    if (total === null) {
      picker.preview.textContent = 'Enter a valid hour and minute';
      return;
    }
    const alertTotal = (total - LEAD_MINUTES + 1440) % 1440;
    picker.preview.textContent = `Reminder at ${formatted12(Math.floor(alertTotal / 60), alertTotal % 60)}`;
  }
  function openPicker() {
    if (!picker.editor || !picker.editor.classList.contains('hidden')) return;
    const draft = timePartsFrom24(settings.time);
    picker.hour.value = twoDigits(draft.hour);
    picker.minute.value = twoDigits(draft.minute);
    pickerPeriod = draft.period;
    syncDraft();
    picker.editor.classList.remove('hidden');
    picker.trigger.setAttribute('aria-expanded', 'true');
    picker.hour.focus({preventScroll: true});
  }
  function closePicker({restoreFocus = false} = {}) {
    if (!picker.editor || picker.editor.classList.contains('hidden')) return;
    picker.editor.classList.add('hidden');
    picker.trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) picker.trigger.focus({preventScroll: true});
  }
  function savePicker() {
    const value = draftToMinutes();
    if (value === null) return;
    const nextTime = `${twoDigits(Math.floor(value / 60))}:${twoDigits(value % 60)}`;
    closePicker({restoreFocus:true});
    // Reuse the existing settings handler to preserve reminder logic and storage format.
    nodes.time.value = nextTime;
    nodes.time.dispatchEvent(new Event('change', {bubbles:true}));
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(settings)); }
    catch (e) { nodes.status.textContent = 'Your browser is blocking local storage. This reminder might not be saved.'; }
  }
  const localDateKey = date => [date.getFullYear(), String(date.getMonth()+1).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-');
  function routineOn(day) {
    const [hours, minutes] = settings.time.split(':').map(Number);
    return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes, 0, 0);
  }
  const dueFor = day => new Date(routineOn(day).getTime() - LEAD_MINUTES * 60000);
  const formatTime = date => date.toLocaleTimeString(undefined, {hour:'numeric', minute:'2-digit'});
  function getNextDue(now = new Date()) {
    const day = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    for (let n = 0; n < 3; n++) {
      const candidateDay = new Date(day.getFullYear(), day.getMonth(), day.getDate() + n);
      const due = dueFor(candidateDay);
      if (due.getTime() > now.getTime()) return {due, routine: routineOn(candidateDay)};
    }
    return null;
  }
  function notificationSupported() { return 'Notification' in window && window.isSecureContext; }
  function permissionText() {
    if (!notificationSupported()) return 'System alerts are unavailable in this browser. In-app reminders still work while Dayflow is open.';
    if (Notification.permission === 'granted') return 'Browser alerts enabled. Keep Dayflow open for scheduled reminders.';
    if (Notification.permission === 'denied') return 'Browser alerts are blocked. Change site notification permissions to allow them. In-app reminders still work.';
    return 'Browser alerts need permission. You can still use in-app reminders.';
  }
  function render() {
    nodes.toggle.checked = settings.enabled;
    nodes.time.value = settings.time;
    displayTime();
    nodes.controls.classList.toggle('hidden', !settings.enabled);
    if (!settings.enabled) closePicker();
    const candidate = getNextDue();
    const routine = routineOn(new Date());
    nodes.upcoming.textContent = settings.enabled && candidate ? `Next alert: ${formatTime(candidate.due)} · starts at ${formatTime(candidate.routine)}` : `Example: ${formatTime(dueFor(new Date()))} reminder for a ${formatTime(routine)} start`;
    nodes.status.textContent = settings.enabled ? permissionText() : 'Off · Switch on for an alert five minutes before your daily start time.';
    nodes.permission.hidden = !settings.enabled || !notificationSupported() || Notification.permission !== 'default';
  }
  function showInApp(routine, isPreview = false) {
    nodes.alertTitle.textContent = isPreview ? 'Your reminder preview ✨' : 'Your daily habits are almost ready ✨';
    nodes.alertCopy.textContent = `Your ${formatTime(routine)} Dayflow routine starts in 5 minutes.`;
    nodes.alert.classList.remove('hidden');
    nodes.alert.classList.remove('dayflow-reminder-reveal');
    // Replay entrance without disrupting progress animations.
    void nodes.alert.offsetWidth;
    nodes.alert.classList.add('dayflow-reminder-reveal');
  }
  function showBrowser(routine, isPreview = false) {
    if (!notificationSupported() || Notification.permission !== 'granted') return false;
    try {
      const msg = new Notification(isPreview ? 'Dayflow reminder preview ✨' : 'Dayflow · Your habits start soon', {
        body: `Your routine begins at ${formatTime(routine)} — just 5 minutes to go!`,
        icon: './app-icon.png', tag: isPreview ? 'dayflow-reminder-preview' : 'dayflow-daily-start',
        silent: false
      });
      msg.onclick = () => { window.focus(); location.hash = '#habits'; document.querySelector('#habits')?.scrollIntoView({behavior:'smooth'}); msg.close(); };
      return true;
    } catch (error) { return false; }
  }
  function showReminder(routine, isPreview = false) {
    if (!document.hidden || isPreview) showInApp(routine, isPreview);
    showBrowser(routine, isPreview);
  }
  function check(now = new Date()) {
    if (!settings.enabled) return;
    const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // Also check tomorrow: the 00:00–00:04 routines trigger on the previous day.
    for (const n of [-1,0,1]) {
      const routineDay = new Date(current.getFullYear(), current.getMonth(), current.getDate() + n);
      const at = dueFor(routineDay), delta = now - at;
      if (delta < 0 || delta > GRACE_MS) continue;
      const firedId = localDateKey(routineDay) + '@' + settings.time;
      try {
        if (localStorage.getItem(FIRED_KEY) === firedId) return;
        localStorage.setItem(FIRED_KEY, firedId);
      } catch (_) { /* Remind anyway if localStorage is blocked. */ }
      showReminder(routineOn(routineDay));
      render();
      return;
    }
  }
  function onEnable(event) {
    settings.enabled = event.target.checked;
    save(); render();
    // Permission must be requested from a direct user gesture, not automatically on load.
    if (settings.enabled && notificationSupported() && Notification.permission === 'default') {
      try { Promise.resolve(Notification.requestPermission()).then(render).catch(render); }
      catch (_) { render(); }
    }
    // Do not send an immediate retroactive reminder when enabling.
  }
  if (picker.trigger && picker.editor) {
    picker.trigger.addEventListener('click', () => {
      picker.editor.classList.contains('hidden') ? openPicker() : closePicker({restoreFocus:true});
    });
    picker.editor.querySelectorAll('[data-time-step]').forEach(button => button.addEventListener('click', () => {
      const total = draftToMinutes();
      const current = total === null ? (() => {
        const [hours, minutes] = settings.time.split(':').map(Number);
        return hours * 60 + minutes;
      })() : total;
      const delta = Number(button.dataset.timeDir) * (button.dataset.timeStep === 'hour' ? 60 : 1);
      setDraftFromMinutes(current + delta);
    }));
    picker.period.forEach(button => button.addEventListener('click', () => {
      pickerPeriod = button.dataset.timePeriod;
      syncDraft();
    }));
    [picker.hour, picker.minute].forEach(field => {
      field.addEventListener('input', () => {
        field.value = field.value.replace(/[^0-9]/g,'').slice(0, 2);
        syncDraft();
      });
      field.addEventListener('blur', () => {
        const total = draftToMinutes();
        if (total !== null) field.value = twoDigits(Number(field.value));
      });
      field.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          if (draftToMinutes() !== null) savePicker();
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          event.preventDefault();
          const total = draftToMinutes();
          if (total !== null) setDraftFromMinutes(total + (event.key === 'ArrowUp' ? 1 : -1) * (field === picker.hour ? 60 : 1));
        }
      });
    });
    picker.save.addEventListener('click', savePicker);
    picker.cancel.addEventListener('click', () => closePicker({restoreFocus:true}));
    // The parent Settings dialog also listens for Escape; the editor owns it while open.
    picker.editor.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        closePicker({restoreFocus:true});
      }
    });
    document.addEventListener('pointerdown', event => {
      if (!picker.editor.classList.contains('hidden') && !picker.editor.contains(event.target) && !picker.trigger.contains(event.target)) closePicker();
    });
  }
  nodes.toggle.addEventListener('change', onEnable);
  nodes.time.addEventListener('change', e => {
    if (!isValidTime(e.target.value)) { e.target.value = settings.time; return; }
    settings.time = e.target.value;
    save(); render();
  });
  nodes.preview.addEventListener('click', () => showReminder(routineOn(new Date()), true));
  nodes.permission.addEventListener('click', () => {
    if (!notificationSupported() || Notification.permission !== 'default') return;
    try { Promise.resolve(Notification.requestPermission()).then(render).catch(render); }
    catch (_) { render(); }
  });
  nodes.alertClose.addEventListener('click', () => nodes.alert.classList.add('hidden'));
  nodes.alertOpen.addEventListener('click', () => {
    nodes.alert.classList.add('hidden');
    location.hash = '#habits';
    document.querySelector('#habits')?.scrollIntoView({behavior:'smooth', block:'start'});
  });
  window.addEventListener('focus', () => {check();render()});
  document.addEventListener('visibilitychange', () => {if (!document.hidden) { check(); render(); }});
  window.addEventListener('pageshow', () => {check();render()});
  window.addEventListener('storage', e => {
    if (e.key === KEY) { settings = load(); render(); }
  });
  // Poll only while the page is running; this is NOT a background push scheduler.
  setInterval(() => { check(); if (nodes.toggle.checked) render(); }, 15000);
  render();
  check();
  // Expose only testing hooks; no user data or credentials.
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    window.DayflowReminderTest = {check, routineOn, dueFor, getNextDue, settings:() => ({...settings})};
  }
})();
