import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/notosdk.ts',
      name: 'NotoSDK',
      formats: ['iife'], // IIFE is often simplest for a bootstrap script.
      fileName: (format) => `notosdk.js`
    },
    rollupOptions: {
      output: {
        extend: true,
        globals: {
          window: 'window',
          document: 'document'
        }
      }
    },
    minify: true,
    sourcemap: true
  }
});
