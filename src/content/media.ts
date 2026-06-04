import data from "@data";

/** A press article link; `articles` in data.json may be empty (infers never[]). */
type Article = { source: string; date: string; href: string };

/** Edit content in /content/data.json */
export const media = {
  ...data.media,
  articles: data.media.articles as Article[],
};
