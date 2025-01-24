import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: node({
    mode: 'standalone', // Use 'standalone' for a single server file
  }),
});
