# Dayflow — Craft Edition

A visual and interaction polish pass on the existing Dayflow Habit Tracker. **The page layout, features, localStorage data format, category management, lotus icon fix, progress rings, and streak badge milestones are preserved.**

## GitHub Pages upload

Upload all files at the ZIP root to the existing `dayflow-habit-tracker` repository. Files: `index.html`, `style.css`, `script.js`, `favicon.svg`, `app-icon.png`, `paper-grain.png`, `og-dayflow.png`, `manifest.webmanifest`, `404.html`. After committing, allow GitHub Pages to deploy, then hard-refresh.

## Visual changes

- Refined typography and button states without replacing the current interface
- Quieter backgrounds, barely visible grain, consistent focus rings and scrollbar polish
- Motion restricted to intentional actions rather than ambient infinite animation
- More precise completion feedback and a gently animated daily ring
- Native habit search shortcut: press `/` anywhere outside a text field
- Editorial footer with an actual Back to today control
- Platform assets: SVG favicon, PWA manifest/app icon, share preview and a personalized 404 page

## Privacy and data

Data is still stored locally in the browser (`localStorage`); there is no automatic phone/computer sync. **Export a backup in Settings before replacing the site files.** The site does not require an account.

## File organization

`index.html` contains markup. `style.css` contains styling and motion. `script.js` handles interactive behavior. Other files are static image and metadata assets.
