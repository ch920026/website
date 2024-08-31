import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    tailwind(),
  ],
  site: `https:/ch920026.github.io`,
  base: "/website",
  output: "static",
  outDir: "./docs",
  build: {
    assets: "astro",
  },
});
