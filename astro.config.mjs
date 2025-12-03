import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    sanity({
      projectId: '0rudm0te', // <-- Ganti ini dengan Project ID Gorigu
      dataset: 'production',
      useCdn: true,
      studioBasePath: '/admin',
    }),
    react()
  ],

  adapter: cloudflare(),
});