// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anetawujkowska.pl',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
