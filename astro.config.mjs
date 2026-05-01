import { defineConfig } from 'astro/config';

// User-page deploy: site = https://<user>.github.io, no base path.
// To switch to a project page (e.g. mon-arc.github.io/portfolio), add: base: '/portfolio'
// and rename the deploy workflow accordingly. Nothing else needs to change.
export default defineConfig({
  site: 'https://mon-arc.github.io',
});
