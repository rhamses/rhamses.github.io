import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), compress()],
  vite: {
    plugins: [visualizer()],
  },
});
