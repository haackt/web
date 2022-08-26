import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkGemoji from "remark-gemoji";
import remarkStringify from "remark-stringify/lib/index.js";
import remarkReadingTime from "./src/remark/remark-reading-time.mjs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://haackt.com/",
  integrations: [
    mdx({
      remarkPlugins: [remarkGemoji, remarkStringify, remarkReadingTime],
    }),
    tailwind(),
    sitemap(),
    react(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
