# Dayflow — Meditate icon fix

The Meditate habit previously used the lotus emoji (🪷), which appears as a blank square on some devices. Its `leaf` icon ID is now rendered as a custom colorful SVG lotus across platforms. The original icon ID and browser storage keys have not changed.

### Deploy to your existing GitHub Pages repository

Upload the updated `script.js` **and** `index.html` to the repository root, replacing the existing versions, then commit. `index.html` now requests `script.js?v=5` so browsers load the fix instead of a cached old script. `style.css` is included unchanged for completeness; you don't need to replace it. Refresh your website after deployment.

Your habits, streaks, calendar, and progress remain intact.
