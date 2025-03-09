import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/components/triggers/TestWidget.tsx", // Ensure this path is correct
      name: "NotofoxWidget",
      fileName: (format) => `TestWidget.${format}.js`,
      formats: ["umd"], // Ensure UMD format is used
    },
    rollupOptions: {
      external: ["react", "react-dom"], // do NOT bundle react/react-dom
      // output: {
      //   // inlineDynamicImports: true,
      //   // globals: {
      //   //   "react": "React",
      //   //   "react-dom": "ReactDOM"
      //   // }
      // }
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
