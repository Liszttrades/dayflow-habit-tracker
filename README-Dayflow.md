# Dayflow — Habit Tracker

A responsive, standalone habit-tracking website built with HTML, CSS, and JavaScript. No accounts, backend, API keys, or libraries required.

## Get started

1. Open **index.html** in any modern browser.
2. Explore the clearly labeled preview data, then click **Start fresh** for a blank progress history.
3. Press **+** to log incremental progress, **Finish** to complete a goal, or the edit icon to change a habit.
4. Use the calendar to switch dates. Weekly graphs and streaks update automatically.

## Features

- 10 ready-to-use daily habits with custom SVG icons and completion rings
- Create, edit, and delete habits; customize colors, icons, units, and daily targets
- Calendar with activity heatmap and editable historical dates
- Weekly completion chart, streaks, and top habit rankings
- Search and category filters, light/dark theme, mobile-friendly layout
- Automatic browser storage, JSON backup download, and backup restore
- Full-width, comfortable desktop layout with enlarged cards, calendars, habit rings, and progress bars
- No external services or tracking

## Hosting on GitHub Pages

Create a repository, upload `index.html` to its main branch, then use **Settings → Pages → Deploy from a branch → main / root**. The published site will work like the local version.

### Important: storage

Your habits and check-ins are saved using **localStorage** in the current browser, not synced across devices. If you open the site on a different device or browser, use **Settings → Export backup** and **Import backup** to transfer data. Clearing site data also erases locally saved progress. For live cross-device syncing, this project would need a backend service such as Supabase.

### How streaks work

A day counts toward your streak after you **fully complete at least one habit**. If today is not yet active, yesterday's streak is preserved. Daily percentage is the average of progress toward each habit's goal, capped at 100% per habit.

## Files

- `index.html` — fully self-contained website
- `README-Dayflow.md` — this guide
