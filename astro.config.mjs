// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://facundopidal.is-a.dev",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.startsWith("https://facundopidal.is-a.dev/portfolio"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
