import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  // plugins: [react()],
  css: {
    postcss: './postcss.config.mjs'
  },
  build: {

    // build the Changelog widget compenent into a portable .js file
    lib: {
      entry: "src/components/triggers/ChangelogWidgetTrigger.tsx",
      name: "NotofoxChangelogWidget",
      fileName: (format) => `ChangelogWidget.${format}.js`,
      formats: ["umd"],
    },
    minify: false,
    rollupOptions: {
      // external: ["react", "react-dom"], // do NOT bundle react/react-dom
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react",
  },


});
