# Dayflow — Motion Edition

A responsive habit tracker with calendar, personal streaks, colorful 2D badge illustrations, and animated progress bars. No third-party libraries or build step.

## Files
- `index.html`: semantic page markup
- `style.css`: themes, layout, responsiveness, and motion effects
- `script.js`: state, habits, calendar, streak milestone tracking, and interactive animations

## Publish to GitHub Pages
Upload **all three files** to the **root** of your `dayflow-habit-tracker` repository. Replace the old `index.html`, add `style.css` and `script.js`, and click **Commit changes**. GitHub Pages will republish them at the same URL. Keep all three files together (same directory); uploading only `index.html` will leave the site unstyled and non-interactive.

## What's new
- Streak celebration popup with a bigger 2D colored flame, soft glow, rays, sparkles, a spring animation, and confetti.
- Flame badges at 3, 10, 30, 100, and 200 days; unlock once and retain earned badges.
- Confetti + a little button bounce whenever a habit reaches its full target (including via the + button).
- Smoothly animated habit progress rings and color-matched gradient bars.
- Shimmer and gentle glow for filled bars, luminous weekly columns for 100% days, and a colorful full-day completion ring celebration.
- Respects operating-system reduced motion preferences; no external dependencies or tracking.

## Data and backups
Storage is unchanged: `dayflow_tracker_v2` in the browser's localStorage. Your existing saved habits and history should remain compatible. **Export a backup in Settings before replacing files.** Changing files in an existing GitHub Pages repository normally retains your saved progress. The site does not sync automatically between devices; export/import backups as needed.

## Test
Open `index.html` in your browser. Tap **Preview** under Streak badges to test the celebration. For the habit-complete effect, use **Start fresh**, then finish a habit.
