import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    {
      name: "public-html-routes",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const urlPath = req.url ? req.url.split("?")[0] : "";
          if (urlPath && !path.extname(urlPath)) {
            const normalizedPath = urlPath.endsWith("/") ? urlPath : `${urlPath}/`;
            const publicHtmlPath = path.join(process.cwd(), "public", normalizedPath, "index.html");
            if (fs.existsSync(publicHtmlPath)) {
              req.url = normalizedPath + "index.html" + (req.url && req.url.includes("?") ? "?" + req.url.split("?")[1] : "");
            }
          }
          next();
        });
      },
    },
  ],
});
