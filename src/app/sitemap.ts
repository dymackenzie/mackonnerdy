import type { MetadataRoute } from "next";
import { nav, site } from "@/content/site";

const BASE = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: `${BASE}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
