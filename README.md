# KJSSE Students' Council Website

A 4-page static site built from your Stitch designs, wired together into a real multi-page site.

## Files

- `index.html`   — Home
- `about.html`   — About Us
- `events.html`  — Events
- `team.html`    — Our Team
- `js/main.js`   — shared script (mobile menu + scroll reveal)

## What was changed from the raw Stitch exports

- All navigation links (header, mobile menu, footer) now point to the real pages instead of `#`.
- Every page has a working hamburger menu on mobile (tap to open/close). `events.html` already had a nicer slide-in drawer built in, so that one was kept and just wired up with the right links.
- Home page hero buttons and trending cards now link to Events / About / Team.
- Added a missing `<title>` tag to the Home page.
- Kept each page's own color/type system exactly as designed (they're all visually identical — same "Academic Precision" palette — just generated as separate embedded configs).

## Updating images later

Every image is currently an external URL (the placeholder images from Stitch, hosted on Google's servers). To swap one:

1. Open the page's HTML file.
2. Find the `<img ... src="https://...">` tag you want to change (search for the `alt="..."` text to find it quickly, e.g. `alt="Abhiyantriki Festival"`).
3. Replace the `src` value with your new image — either another URL, or a local path like `images/abhiyantriki.jpg` if you add your own `images/` folder and upload real photos there.

No other code needs to change when you swap an image.

## Running it locally

No build step needed — it's plain HTML + Tailwind (loaded from a CDN) + vanilla JS. Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
