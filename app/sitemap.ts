import type { MetadataRoute } from "next";
import { BUSINESS, posts, services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const fixed = ["", "/services", "/about", "/contact", "/gallery", "/blog", "/appointment", "/privacy"];
  return [
    ...fixed.map((p) => ({ url: `${base}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.date, priority: 0.6 })),
  ];
}
