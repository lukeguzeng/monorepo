// app.config.ts
import { defineConfig } from '@tanstack/start/config';

export default defineConfig({
  server: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
    preset: 'vercel',
    
  },
});
