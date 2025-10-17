import { defineConfig } from 'astro/config';

export default defineConfig({
  // --- Vite configuration ---
  vite: {
    server: {
      watch: {
        // Ignore heavy or unnecessary directories
        ignored: [
          '**/node_modules/**',
          '**/public/node/**',
          '**/.git/**',
          '**/.astro/**',
          '**/dist/**',
        ],
        usePolling: false, // Use native file watching (faster and fewer descriptors)
      },
    },
  },

  // --- Astro options (optional but good practice) ---
  server: {
    // If your dev server is sluggish on big repos, limit filesystem scanning:
    watchExclude: [
      'node_modules/**',
      'public/node/**',
      'dist/**',
    ],
  },

  // --- Optional: reduce rebuild noise ---
  build: {
    inlineStylesheets: 'auto', // Keeps memory usage moderate
  },
});