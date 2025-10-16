import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa", // multi-page app
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        stitchmate: "stitchmate.html",
        themetoggle: "themetoggle.html",
      },
    },
  },
});
