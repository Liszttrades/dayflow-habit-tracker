# Dayflow — Habit Tracker

A responsive, standalone habit-tracking website built with HTML, CSS, and JavaScript. No accounts, backend, API keys, or libraries required.

## Get started

1. Open **index.html** in any modern browser.
2. Explore the clearly labeled preview data, then click **Start fresh** for a blank progress history.
3. Press **+** to log incremental progress, **Finish** to complete a goal, or the edit icon to change a habit.
4. Use the calendar to switch dates. Weekly graphs and streaks update automatically.

## Features

- 10 ready-to-use daily habits with colorful hand-drawn 2D SVG icons and completion rings
- Create, edit, and delete habits; customize colors, icons, units, and daily targets
- Calendar with activity heatmap and editable historical dates
- Weekly completion chart, streaks, and top habit rankings
- Animated flame streak badges at **3, 10, 30, 100, and 200 days** (orange → gold → red → pink → purple)
- Animated celebration modal with fire, light rays, bounce and confetti when you first earn a new milestone
- **Streak badges** panel with permanent earned badges, a milestone countdown, and a Preview button to test the effect
- Preview every badge color by clicking its icon; unlocked badges replay their celebration; respects reduced-motion preferences
- Search and category filters, light/dark theme, mobile-friendly layout
- Automatic browser storage, JSON backup download, and backup restore
- Full-width, comfortable desktop layout with enlarged cards, calendars, habit rings, and progress bars
- No external services or tracking

## Hosting on GitHub Pages

Create a repository, upload `index.html` to its main branch, then use **Settings → Pages → Deploy from a branch → main / root**. The published site will work like the local version.

### Important: storage

Your habits and check-ins are saved using **localStorage** in the current browser, not synced across devices. If you open the site on a different device or browser, use **Settings → Export backup** and **Import backup** to transfer data. Clearing site data also erases locally saved progress. For live cross-device syncing, this project would need a backend service such as Supabase.

### How streaks work

A day counts toward your streak after you **fully complete at least one habit**. If today is not yet active, yesterday's streak is preserved. When you cross a milestone, the animation displays **once when newly unlocked**, and the badge remains earned even if your streak later ends. Badge unlocks are stored under the existing `dayflow_tracker_v2` browser storage key and included in JSON backup exports. Previously saved habits and logs continue to work. In example-data mode, streak badges are clearly marked **Demo** and don't count as real achievements. Click **Start fresh** to begin tracking your own badges. You can click **Preview**, or any locked badge, to see its color and animation immediately without unlocking it. Daily percentage is the average of progress toward each habit's goal, capped at 100% per habit.

## Files

- `index.html` — fully self-contained website
- `README-Dayflow.md` — this guide
