// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
  }
});
