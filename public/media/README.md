# Media assets

> Content/copy for each item lives in `src/content/*.ts`.

## Video rail thumbnails (`/media`, "Watch Mackonner Play")

YouTube videos derive their thumbnail automatically from the link — no file needed.

Instagram reels can't be hotlinked, so they show a branded gradient placeholder
until a real cover image exists. To use the real cover, save it here using the
reel's shortcode as the filename (the part after `/p/` or `/reel/` in the URL):

```
videos/DVzYPKgERBq.webp   ← PPA Texas Open 2026
videos/DZC7yrnu2va.webp   ← Zocker Giveaway
videos/DXilyz8j4Ud.webp   ← chinoytv
videos/DXDsN91lv1w.webp   ← SM Active Hub
videos/DWvP5xhE0Ql.webp   ← PPA Hanoi 2026
```

Cards are 9:16 (portrait). Save a portrait cover, ideally ~720×1280, as `.webp`.
The path is already wired in `content/data.json` → `media.videos[].image`; drop the
file in and it replaces the placeholder automatically (no code change needed).
