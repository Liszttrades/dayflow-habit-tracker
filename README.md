# Dayflow 2.0 — Product Refinement

GitHub Pages–compatible habit tracker. The original Dayflow visual design, flame tiers, icon library and completion celebrations are preserved.

## Improvements

- Daily, selected-weekday, and flexible weekly-goal schedules. On days a habit is not due, it does not lower the daily completion percentage. Flexible weekly goals count separately from daily completion.
- Dated goal/schedule snapshots, historical accuracy, and archive/restore rather than destructive deletion.
- Clear "habits finished / scheduled" and "target progress" numbers, 30-day consistency tiles, trailing 7-day progress comparisons, per-habit success rates, and weekly goal progress.
- Improved tap targets, reduced idle animation, light/dark mode polishing, favicon, manifest, social metadata, 404 page.
- Optional Supabase cloud sign-in/backup with owner-only database permissions and conflict prompts. **Cloud is off until you configure it.**

## Publish to GitHub Pages

1. **Before updating**, open your existing Dayflow website > Settings > **Export backup**. Keep that JSON file somewhere safe.
2. Unzip `dayflow-2-github-ready.zip` and upload its website files to the **root** of your existing GitHub `dayflow-habit-tracker` repository. Replace older versions, then commit.
3. Upload all the website files, not the ZIP as a single file. Keep `index.html`, `style.css`, `script.js`, `cloud.js`, `config.js`, favicon/icon images, `manifest.webmanifest` and `404.html` together.
4. Wait for GitHub Pages deployment, hard refresh the page, and check your saved progress. Your URL stays the same.
5. If history is missing due to a different browser/device, import the saved JSON backup in Settings.

## Optional Supabase cloud synchronization

**The ZIP includes code for this, but no cloud connection is preconfigured.** The tracker works without an account using private local browser storage.

1. Create your own Supabase project and enable Email OTP/magic-link authentication.
2. In your **Supabase SQL Editor**, run the separately supplied `dayflow-2-supabase-setup.sql` to create a secured `dayflow_profiles` table and row-level security policies.
3. Under **Authentication > URL Configuration**, configure your GitHub Pages URL as a Site URL and permitted Redirect URL, e.g. `https://liszttrades.github.io/dayflow-habit-tracker/`.
4. Fill the `url` and `publishableKey` in `config.js` with the **public project URL** and **publishable/anon key**. Never put a secret or service-role key in a public GitHub Pages file.
5. Upload that updated config, sign in through Settings, then select whether to upload this device's local backup or use the existing cloud copy when prompted.
6. When a second device has updated the cloud backup, Dayflow will ask before replacing local content. Offline edits from multiple devices may require explicit conflict resolution. Keep regular JSON backups.

The optional SDK is loaded from jsDelivr only when cloud is configured. Automatic backups to your Supabase project require internet access and RLS policies configured correctly.

## Data migration notes

The existing key `dayflow_tracker_v2` is retained. The new version upgrades your local data *in place* to add schedules, creation/archive dates, and past snapshots. Older versions did not store dates when every habit was created or edited, so exact pre-upgrade creation histories cannot be recovered. The migration uses the dates available in your old logs, then preserves subsequent changes correctly.

If your goal is privacy, leave `config.js` empty and continue using Dayflow locally.
