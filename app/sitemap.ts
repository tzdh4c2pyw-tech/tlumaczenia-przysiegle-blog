import type { MetadataRoute } from "next";

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
  "/blog/tlumaczenie-wyroku-z-ukrainskiego",
  "/blog/tlumaczenie-umowy-z-ukrainskiego",
  "/blog/tlumaczenie-dyplomu-z-ukrainskiego",
  "/blog/tlumaczenie-swiadectwa-z-ukrainskiego",

  "/miasta/krakow",
  "/miasta/warszawa",
  "/miasta/wroclaw",
  "/miasta/poznan",
  "/miasta/gdansk",
  "/miasta/katowice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/wycena"
          ? 0.95
          : route === "/tlumaczenia-przysiegle"
            ? 0.9
            : route === "/tlumaczenia-prawnicze"
              ? 0.85
              : route.startsWith("/blog")
                ? 0.8
                : route.startsWith("/miasta")
                  ? 0.75
                  : 0.7,
  }));
}
