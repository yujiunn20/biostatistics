import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://biostatistics.yuchunlab.com/",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "zh-Hant",
        locales: { "zh-Hant": "zh-Hant", en: "en", ja: "ja" },
      },
      filter: page => page !== "https://biostatistics.yuchunlab.com/" && !page.endsWith("/search-index.json"),
    }),
  ],
});
