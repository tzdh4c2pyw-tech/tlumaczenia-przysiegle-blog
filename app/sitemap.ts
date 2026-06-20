import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tlumaczenia-przysiegle-blog.vercel.app";

  const routes = [
    "",
    "/tlumaczenia-przysiegle",
    "/tlumaczenia-prawnicze",
    "/cennik",
    "/wycena",
    "/blog",
    "/blog/tlumaczenie-przysiegle-ukrainski-cena",
    "/blog/tlumaczenie-aktu-urodzenia-z-ukrainskiego",
    "/blog/tlumaczenie-dokumentow-do-karty-pobytu",
    "/blog/tlumaczenie-pelnomocnictwa-z-ukrainskiego",
    "/miasta/krakow",
    "/miasta/warszawa",
    "/miasta/wroclaw",
    "/miasta/poznan",
    "/miasta/gdansk",
    "/miasta/katowice",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
