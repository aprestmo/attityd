import { defineConfig } from "astro/config";
import compress from "astro-compress";
import rome from "astro-rome";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    compress(),
    sitemap(),
    rome({ path: ["./src", "./dist"] }),
  ],
  site: "https://attityd.no",
});
