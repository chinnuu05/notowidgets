// @ts-nocheck
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'
import tailwindcssNesting from 'tailwindcss/nesting'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
// import postcssMixins from 'postcss-mixins'
import postcssPresetMantine from 'postcss-preset-mantine'
import path from 'path'
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), tailwindcssNesting(), autoprefixer(), postcssNesting(), postcssPresetMantine()]
    },
  },
  base: './',
  build: {
    lib: {
      entry: {
        'TestWidget': 'src/components/TestWidget.tsx',
        'notosdk': 'src/notosdk.ts'
      },
      formats: ['es', 'umd'],
      name: 'MyWidget',
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  }
});
