/** Get the filename from a path, e.g. /media/journey/IMG_2448.JPG -> IMG_2448.JPG */
export function extractFileName(path: string): string {
  return path.split("/").pop() ?? path;
}

/**
 * Given a Cloudinary *video* delivery URL, derive a still poster image from the
 * first frame (so the hero shows a clean frame before/while the video loads).
 * Returns undefined for non-Cloudinary URLs (caller can fall back to its own poster).
 *
 * e.g. https://res.cloudinary.com/demo/video/upload/v123/clip.mp4
 *   -> https://res.cloudinary.com/demo/video/upload/so_0/v123/clip.jpg
 */
export function cloudinaryVideoPoster(src?: string): string | undefined {
  if (!src || !src.includes("res.cloudinary.com") || !src.includes("/video/upload/")) {
    return undefined;
  }
  return src
    .replace("/video/upload/", "/video/upload/so_0/")
    .replace(/\.(mp4|webm|mov|m3u8)(\?.*)?$/i, ".jpg$2");
}

/**
 * Pull the 11-char video ID out of a YouTube URL (watch?v=, youtu.be/, /embed/,
 * /shorts/). Returns undefined for non-YouTube URLs.
 */
export function youtubeId(url?: string): string | undefined {
  if (!url) return undefined;
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return m?.[1];
}

/**
 * Derive a thumbnail image URL from a YouTube link. Uses hqdefault, which always
 * exists for a valid video (unlike maxresdefault). Returns undefined if the URL
 * isn't a recognizable YouTube link.
 */
export function youtubeThumbnail(url?: string): string | undefined {
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined;
}
