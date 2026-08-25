import type { MetadataRoute } from "next";

const baseUrl = "https://kylerobins.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // URL fragments (#section) aren't distinct documents to crawlers, so a
  // single-page site only ever has one indexable entry: the homepage.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
