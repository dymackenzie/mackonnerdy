/** Get the filename from a path, e.g. /media/journey/IMG_2448.JPG -> IMG_2448.JPG */
export function extractFileName(path: string): string {
  return path.split("/").pop() ?? path;
}
