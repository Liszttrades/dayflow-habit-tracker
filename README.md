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
