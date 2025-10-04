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
    lib: {
      entry: "src/components/triggers/FeedbackWidgetTrigger.tsx", // Ensure this path is correct
      name: "NotofoxWidget",
      fileName: (format) => `FeedbackWidget.${format}.js`,
      formats: ["umd"], // Ensure UMD format is used
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
