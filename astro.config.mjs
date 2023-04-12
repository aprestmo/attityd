import { defineConfig } from "astro/config";
import rome from "astro-rome";
import lightningcss from "vite-plugin-lightningcss";

// https://astro.build/config
export default defineConfig({
	integrations: [],
  vite: {
    plugins: [
      lightningcss({
        browserslist: "> 2% in NO",
      })
    ]
  }
});
