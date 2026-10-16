# Dayflow — Dark Dropdown + Animated Counters Fix

This is the complete GitHub Pages-ready release. Upload all files in this folder to the **root** of the `dayflow-habit-tracker` repository.

## Changes
- Fixed low-contrast repeat schedule and weekly target dropdowns in dark mode.
- Removed the archived habits subsection from Settings; the Archive Inbox remains accessible beside Add in the habit list and supports restoring habits.
- Added smooth, change-triggered count-up transitions to dashboard completion, daily target %, streak days, weekly %, weekly activity average, habit amounts and percentages, plus insight percentages and week-over-week change.
- Preserved habit data format, streak and floating animations, light mode, archived history, and reduced-motion preference.
- Separate `index.html`, `style.css`, and `script.js` with versioned assets to help bypass stale GitHub Pages caches.

## Install
1. In your current Dayflow site, export a backup first from Settings.
2. Extract the ZIP. On GitHub, replace all matching files in the repository root: `index.html`, `style.css`, `script.js`, `cloud.js`, `config.js`, `favicon.svg`, `app-icon.png`, `og-dayflow.png`, `manifest.webmanifest`, `404.html`.
3. Commit, wait for GitHub Pages to redeploy, and hard-refresh your browser.
4. Do **not** upload this ZIP as-is to GitHub Pages; upload the extracted files.

Cloud sync still requires a separately configured Supabase project. The cloud credentials here are placeholders. Browser-local habits remain local unless configured and signed in.
