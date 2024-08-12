import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@sanity')) {
              return 'vendor-sanity';
            }
            if (id.includes('class-variance-authority')) {
              return 'vendor-class-variance-authority';
            }
            if (id.includes('clsx')) {
              return 'vendor-clsx';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix-ui';
            }
            if (id.includes('@tippyjs')) {
              return 'vendor-tippy';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-react-router-dom';
            }
            if (id.includes('react-helmet-async')) {
              return 'vendor-react-helmet-async';
            }
            if (id.includes('react-icons')) {
              return 'vendor-react-icons';
            }
            if (id.includes('react-fast-marquee')) {
              return 'vendor-react-fast-marquee';
            }
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide-react';
            }
            if (id.includes('react-syntax-highlighter')) {
              return 'vendor-react-syntax-highlighter';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion';
            }
            if (id.includes('date-fns')) {
              return 'vendor-date-fns';
            }
            if (id.includes('groq')) {
              return 'vendor-groq';
            }
            if (id.includes('@babel/runtime')) {
              return 'babel-runtime';
            }
            if (id.includes('rxjs')) {
              return 'vendor-rxjs';
            }
            if (id.includes('prismjs')) {
              return 'vendor-prismjs';
            }
            if (id.includes('@popperjs')) return 'vendor-popperjs';
            if (id.includes('tippy.js')) return 'vendor-tippyjs';
            if (id.includes('refractor')) return 'vendor-refractor';
            if (id.includes('react')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
