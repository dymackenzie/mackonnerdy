# Media assets

Drop the real files here, matching the exact paths below. The site currently
renders styled **placeholders** that name each expected file — once a real file
exists at its path, replace the `<Placeholder />` usage in the relevant page/
component with `next/image` pointing at the same path.

## hero/
- `hero.mp4` — the horizontal homepage hero video (muted, looping, ambient).
  Recommend a 16:9 clip, ~10–25s, H.264 MP4, < 8 MB. Add `hero.webm` for size.
- `hero-poster.jpg` — first-frame poster image (shown before/while video loads
  and when reduced-motion is on). Wire it via the `poster` prop on `<HeroVideo>`.

## journey/  (About page phase cards)
- `IMG_2448.JPG` — "The Beginning"
- `IMG_5903.JPG` — "Rising Through the Ranks"
- `4B75FA05-ED40-4487-9548-42EEC8A9EE6F.PNG` — "The Pro Era"

## press/  (Media & Partners page)
- `IMG_0421.jpg` — SM Active Hub Anniversary headline
- `IMG_0451.jpg` — SM City Bicutan feature
- `screenshot-1775925608028.png` — match highlight poster
- `IMG_0431.jpg`, `IMG_0430_edited_edited.jpg` — interview/video thumbnails
- `DSC_9542_Original.JPG`, `PPA Hanoi 2.JPG` — training videos

## sponsors/  (logos, optional)
- `zocker.svg`, `satori.svg`, `love-crunch.svg`, `dink.svg`
  (the site shows wordmarks as text until logo files are added)

> Content/copy for each item lives in `src/content/*.ts`.
