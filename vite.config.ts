import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
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
