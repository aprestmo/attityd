import { defineConfig } from "astro/config";
import lightningcss from "vite-plugin-lightningcss";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      lightningcss({
        browserslist: "> 2% in NO",
      })
    ]
  }
});
