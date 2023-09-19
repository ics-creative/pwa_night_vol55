import { defineConfig } from "vite";
const basePath = process.env.BASE_PATH || "/";


export default defineConfig({
  root: "src",
  base: basePath,
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: "src/index.html",
        container_query: "src/container_query/index.html",
        scroll_driven: "src/scroll_driven/index.html",
      },
    },
  },
  server: {
    port: 3456,
  },
});
