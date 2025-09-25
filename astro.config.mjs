// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

  vite: {
    server: {
      watch: {
        ignored: [
          '**/node_modules/**', // Ignores all files/folders within node_modules
          '**/dist/**',        // Ignores all files/folders within a 'dist' directory
          '**/assets/**'   // Ignores a specific 'temp-data' directory
        ],
      },
    },
  },


});
