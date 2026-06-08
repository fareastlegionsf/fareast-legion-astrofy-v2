import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
site: "https://subtle-quokka-4d8c8e.netlify.app",
  integrations: [mdx(), sitemap(), tailwind()]
});
