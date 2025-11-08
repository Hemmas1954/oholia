import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
      // Set base path for GitHub Pages project site: https://<user>.github.io/oholia/
      // This ensures built asset URLs resolve correctly under the /oholia/ subpath.
      base: '/oholia/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // Security: Avoid exposing secrets to the client. If you need env vars
      // on the frontend, use `import.meta.env.VITE_*` with proper prefixing,
      // and do not bind server-side secrets here.
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
