# my-site

A static site built with [Vite](https://vite.dev) and plain HTML/CSS.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the built site
```

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages.

One-time setup: in the repo on GitHub, go to **Settings → Pages** and set
**Source** to **GitHub Actions**.
