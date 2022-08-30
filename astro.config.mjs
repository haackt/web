import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkGemoji from "remark-gemoji";
import remarkStringify from "remark-stringify/lib/index.js";
import remarkReadingTime from "./src/remark/remark-reading-time.mjs";
import remarkToc from "remark-toc";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://haackt.com/",
  integrations: [mdx({
    remarkPlugins: [remarkGemoji, remarkStringify, remarkReadingTime, remarkToc]
  }), tailwind(), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "server",
  adapter: vercel()
});