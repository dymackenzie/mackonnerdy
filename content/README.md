# Editing the website content

**All the words, lists, links, and image references on the site live in one file:**

```
content/data.json
```

Open it in any text editor, change the text between the `"quotes"`, save, and the
site updates. You do **not** need to touch any code.

## The golden rules of JSON

1. Keep text inside `"double quotes"`.
2. Put a comma `,` between items — but **not** after the last one in a list.
3. If your text has a quote in it, write `\"` (e.g. `"He said \"go\"."`).
4. Apostrophes are fine as-is (`Mackonner's`).

> Tip: paste your edited file into <https://jsonlint.com> to check it's valid
> before saving if you're unsure.

## Adding to a list (e.g. a tournament result)

Find `"tournaments"` and copy one `{ ... }` block, then edit the values:

```json
{ "event": "PPA Orlando", "location": "Florida, USA", "date": "2026", "result": "Quarterfinal", "surface": "Singles" }
```

Remember the comma between blocks. The same pattern works for press articles,
videos, sponsors, coaching offerings, etc.

## Adding images or video

1. Drop the file into `public/media/...` (see `public/media/README.md` for the
   folders and expected names).
2. In `data.json`, set the matching `"image"` (or `"poster"` / `heroVideoSrc`)
   to the path, starting with `/media/...`. Example:

```json
"image": "/media/press/my-new-photo.jpg"
```

The site shows a styled placeholder until a real file exists at that path.

## The hero video (Cloudinary)

The big background video on the homepage is driven by two fields under `"home"`:

```json
"heroVideoSrc": "",
"heroVideoPoster": ""
```

- **Recommended:** upload the clip to **Cloudinary**, copy its delivery URL, and
  paste it into `"heroVideoSrc"` — e.g.
  `"https://res.cloudinary.com/your-cloud/video/upload/v123/mackonner-hero.mp4"`.
  A still poster frame is generated automatically, so you can leave
  `"heroVideoPoster"` empty (or paste your own image URL to override it).
- You can also use a local file instead: drop it in `public/media/hero/` and set
  `"heroVideoSrc": "/media/hero/hero.mp4"`.
- Leave `"heroVideoSrc"` empty (`""`) to show the styled court backdrop only.

Keep it short, muted, and looping — it's meant to be ambient, not loud.

## The profile photo (home)

`"home" → "portrait"` sets the photo beside the intro paragraph. Set `"image"`
to a `/media/...` path (or any image URL) and edit the `"caption"`.

## Highlighting keywords in text

Wrap any words in **double equals** to give them a gold highlighter swipe. This
works in the home intro and bio copy. Example:

```json
"intro": "Mackonner is one of ==Canada's top== junior players..."
```

Add or remove the `==...==` around whatever phrases you want to emphasize.

## Sponsor logos

Each sponsor under `"sponsors" → "current"` has a `"logo"` path. Drop the logo
image into `public/media/sponsors/` and the site shows it automatically; until
then it falls back to showing the sponsor's name. Prefer transparent PNG or SVG.

## Where each part shows up

| Key in data.json | Page |
| --- | --- |
| `site`, `nav` | header, footer, everywhere |
| `home` | Home (hero, stats, ticker, bio) |
| `journey`, `results` | About |
| `media`, `sponsors` | Media & Partners |
| `coaching` | Coaching / Clinics |
