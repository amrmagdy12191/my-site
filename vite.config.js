import { defineConfig } from 'vite';

// GitHub Pages serves project sites from /<repo-name>/.
// A relative base works there, on a custom domain, and locally.
export default defineConfig({
  base: './',
});
