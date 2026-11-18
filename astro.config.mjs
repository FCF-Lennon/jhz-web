// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jhz.cl',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact(), sitemap()],
  image: {
    domains: ['jhz.cl'],
  },
});