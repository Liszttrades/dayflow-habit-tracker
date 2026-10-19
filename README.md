# Dayflow — Seamless Progress Motion Edition

This is the complete GitHub Pages-ready release. Upload all files in this folder to the **root** of the `dayflow-habit-tracker` repository.

## Changes
- Seamless 100% weekly progress ring. The gradient now loops continuously without a visible join, while the ring still fills when progress changes.
- Unified 850 ms progress fill motion on **every** habit ring and horizontal bar, including added, restored, imported and filtered habits.
- Gentle entry state for newly created habits; subsequent clicks animate the same as the original habits.
- Improved initial loading: visible habit rings fill from zero; top progress circles/weekly line and weekly columns keep their smooth transitions.
- Kept the existing colors, streak artwork, floating motion, custom dropdowns, archive inbox, progress counts and light/dark themes.
- No storage-key or backup-format changes. Supports reduced-motion preference.

## Install
1. In your current Dayflow site, export a backup first from Settings.
2. Extract the ZIP. On GitHub, replace all matching files in the repository root: `index.html`, `style.css`, `script.js`, `cloud.js`, `config.js`, `favicon.svg`, `app-icon.png`, `og-dayflow.png`, `manifest.webmanifest`, `404.html`.
3. Commit, wait for GitHub Pages to redeploy, and hard-refresh your browser.
4. Do **not** upload this ZIP as-is to GitHub Pages; upload the extracted files.

Cloud sync still requires a separately configured Supabase project. The cloud credentials here are placeholders. Browser-local habits remain local unless configured and signed in.


### Confirmation dialogs (merged update)
Custom Dayflow confirmation dialogs replace native browser popups for archiving habits, deleting custom categories, resetting Dayflow, clearing sample progress, and importing backups. Archiving still preserves history and supports restoring from Archive Inbox. The existing storage key, cloud configuration, scheduling, ring animations, and other features remain unchanged.

## Skeleton loading
Dayflow shows subtle dashboard-shaped placeholders **only if initial startup is still pending after 220 ms**. Actual data is never delayed. The placeholders match the overview metrics, habit list, calendar and weekly chart, then vanish immediately after the local app finishes rendering. The existing >5s load-error message takes precedence if initialization fails. Reduced-motion preferences disable shimmer. This is a local startup loader, not a fake cloud-sync indicator.

## Daily reminder feature

- In **Settings → Daily habit reminder**, turn the toggle on and choose a daily **start time** (default: **7:00 AM**).
- Dayflow shows the notification time **5 minutes beforehand** (e.g., **6:55 AM** for a **7:00 AM** start).
- Select **Try reminder** to see a live preview. Grant browser notification permission if prompted to receive browser-level alerts.
- Your reminder setting is saved locally in the same browser under `dayflow_daily_reminder_v1`; habit data storage, cloud setup, schedules, and archives were not modified.
- Reminders are checked while Dayflow is running. Browser tabs may be throttled, so delivery may not be exact; this implementation **cannot notify users when all Dayflow tabs are closed**. Reliable background notifications will require a real web-push backend and service worker (plus appropriate user permission). On some mobile browsers, the installed app and supported push infrastructure are also required.
- The preview and scheduling use the device's local time; no user data is transmitted by the reminders module. Reminder preferences are device-specific and are not included in habit-data JSON backups.

### Deployment
Upload **all files**, including the new `reminders.js`, to the root of your GitHub repository. Do not upload the ZIP itself. Export a habit backup before replacing the files.

## Custom daily reminder time picker (October 2026)
- Replaced the browser-native time dropdown with an inline Dayflow-style time editor in Settings.
- Choose any hour and minute (typed or via the +/− controls), plus AM/PM, then Save time or Cancel.
- Displays the five-minute-early reminder before saving. For instance, start at 7:00 AM → reminder at 6:55 AM.
- Uses the **same** `dayflow_daily_reminder_v1` browser storage key and existing notification scheduler; no user data migration or reset is required.
- Supports keyboard navigation, Escape cancellation, compact mobile layout, both themes, and reduced-motion preferences.
- This changes the time-selection interface only. As before, browser reminders run while Dayflow is open, not as guaranteed background push alerts when the app is fully closed.
