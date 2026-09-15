// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { PluginOption } from "vite";
import fs from "node:fs";
import path from "node:path";

const isGhPages = process.env["BUILD_TARGET"] === "gh-pages";
const basePath = isGhPages ? (process.env["BASE_PATH"] || "/") : "/";

const ghPagesPostBuildPlugin: PluginOption = {
  name: "gh-pages-post-build",
  enforce: "post",
  buildApp: {
    order: "post",
    async handler() {
      console.log("[gh-pages-post-build] Prerender complete. Preparing static export in .output/public...");
      const srcDir = path.resolve(process.cwd(), ".vercel/output/static");
      const targetDir = path.resolve(process.cwd(), ".output/public");

      if (fs.existsSync(srcDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
        fs.cpSync(srcDir, targetDir, { recursive: true, force: true });
        console.log(`[gh-pages-post-build] Copied static files to ${targetDir}`);
      }

      // Ensure .nojekyll exists
      fs.writeFileSync(path.join(targetDir, ".nojekyll"), "");

      // Ensure 404.html exists for client-side routing fallback
      const indexPath = path.join(targetDir, "index.html");
      const notFoundPath = path.join(targetDir, "404.html");
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath);
        console.log("[gh-pages-post-build] Created 404.html from index.html for SPA routing fallback.");
      }

      console.log("[gh-pages-post-build] Static GitHub Pages build successfully generated!");
      process.exit(0);
    },
  },
};

export default defineConfig({
  ...(isGhPages
    ? {
        vite: {
          base: basePath,
          plugins: [ghPagesPostBuildPlugin],
        },
      }
    : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGhPages
      ? {
          prerender: { enabled: true, crawlLinks: true },
          router: { basepath: basePath },
        }
      : {}),
  },
  nitro: {
    preset: process.env["NITRO_PRESET"] || "vercel",
  },
});
