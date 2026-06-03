import type { MetadataRoute } from "next";
import { nav } from "@/content/site";

const BASE = "https://mackonnerdy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: `${BASE}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
