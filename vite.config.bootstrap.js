import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/notosdk.ts',
      name: 'NotoSDK',
      formats: ['iife'],
      fileName: () => `notosdk.js`
    },
    // rollupOptions: {
    //   external: ["react", "react-dom"], // do NOT bundle react/react-dom
    // },
    minify: false,
    sourcemap: false
  },
  

});
