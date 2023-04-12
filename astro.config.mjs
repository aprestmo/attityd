import { defineConfig } from "astro/config";
import rome from "astro-rome";

// https://astro.build/config
export default defineConfig({
	integrations: [rome()],
});
