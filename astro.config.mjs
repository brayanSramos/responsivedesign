import { defineConfig } from 'astro/config';
import staticAdapter from "@astrojs/static";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://brayansramos.github.io",
  base: "/responsivedesign/",
  adapter: staticAdapter(),
});