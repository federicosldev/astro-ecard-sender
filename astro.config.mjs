import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  adapter: vercel(),
});