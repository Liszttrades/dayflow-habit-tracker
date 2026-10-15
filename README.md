# Dayflow — Personalize Edition

A static responsive habit tracker. No build tools, account, external fonts, icon packages or frameworks needed.

## Files
- `index.html` — main page and habit form
- `style.css` — app design, responsive styles, animation, dropdown and emoji styles
- `script.js` — habit tracking, custom category storage, icon picker, streaks and completion effects

## Changes in this version
- Upgraded the category selector to a custom accessible popover with colorful labels and checkmarks.
- Create your own categories directly inside the habit form, save them in the same browser storage, and filter habits by your categories.
- Added 49 colorful emoji-style icons in searchable collections, with native rendering (Apple emoji on iOS, the system's emoji elsewhere).
- Removed the up/down arrows from number fields while preserving numeric input and validation.
- Removed the awkward orange radial background from the streak card; kept the animated flame and milestone celebrations.
- Preserved prior progress rings, confetti, animated gradient bars, calendar, and the existing 3/10/30/100/200 day badges.
- Backups now save and restore user-defined categories and selected icons.

## Upload to GitHub Pages
1. Unzip the archive.
2. Upload **index.html, style.css, script.js** together to the root of your existing `dayflow-habit-tracker` repository, replacing the older copies.
3. Commit changes. Keep GitHub Pages source set to `main` → `/(root)`.
4. When GitHub finishes deploying, refresh your site. If you see the old version, hard-refresh with Ctrl+Shift+R.

## Saved progress
Dayflow retains the existing localStorage key `dayflow_tracker_v2`; prior habits, logged progress, and streak badges continue to work.

**Before updating**, open the current website, go to Settings, and export a backup just in case. Progress is stored in the current browser, not synced across devices automatically.

## Notes
- Icon illustrations use the platform's native emoji font, so exact artwork differs between iOS, Windows and Android. No copied Apple emoji image files are embedded.
- In the habit form, use **Category** → **+ Create your own** for additional categories. You can search or filter emojis in **Choose an icon**.
