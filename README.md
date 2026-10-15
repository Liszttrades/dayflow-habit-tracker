# Dayflow — Refined Dashboard Edition

Files:
- `index.html` — page structure
- `style.css` — visual theme, responsive layout, motion
- `script.js` — habit tracking, badges, categories, saving

## Changes
- Fixed the clipped/overlapping "YOUR COLLECTION / Streak badges" heading by adding proper interior spacing.
- Aligned the three dashboard statistic cards and gave the streak badge and weekly graphic circular displays matching the daily-completion ring (130 px on wide desktops).
- Replaced the weekly-progress mini arrow tile with a custom animated SVG bar-and-arrow illustration inside an animated progress dial.
- Added trash buttons to custom category rows in the Create/Edit Habit popover; core categories (Health, Mind, Lifestyle) stay protected.
- Deleting a category prompts for confirmation. Habits assigned to it are reassigned to Lifestyle and their progress records are kept; no habits are deleted.
- Resolved habit-row horizontal overflow on 320px screens.
- No changes to the `dayflow_tracker_v2` localStorage format. Existing data and previous animations remain compatible.

## Update your GitHub Pages site
Upload **all three** site files to the root of your existing `dayflow-habit-tracker` repository, replacing the older versions. Keep names unchanged; commit your changes. GitHub Pages will serve the updated site using the current `main` branch deployment. Refresh the page after deployment.

**Back up first:** Dayflow → Settings → Export backup. The site still uses browser-local storage; a public website URL does not sync browser progress across devices.
