import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa", // multi-page app
  plugins: [
    {
      name: "html-hot-reload",
      handleHotUpdate({ file, server }) {
        if (file.endsWith(".html")) {
          server.ws.send({
            type: "full-reload",
            path: "*",
          });
        }
      },
    },
  ],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: true,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        stitchmate: "projects/stitchmate.html",
        portfolio: "projects/portfolio.html",
      },
    },
  },
});
