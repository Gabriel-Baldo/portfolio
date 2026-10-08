# Gabriel Baldo — Software Developer Portfolio

Personal portfolio of a full-stack developer (Ruby on Rails, Java/Spring, Next.js/React, Python/IA). Static website — pure HTML/CSS/JS, no build step — with a PT/EN language toggle.

**Live:** https://gabriel-baldo.github.io/portfolio/

## Stack

HTML · CSS (Mobile First, Flexbox/Grid) · JavaScript (no dependencies) · Nginx + Docker for local preview.

## Structure

- `index.html` — content and SEO, with `data-i18n` attributes for PT/EN
- `css/style.css` — dark theme, responsive layout
- `js/main.js` — mobile menu, copy-email button, PT/EN dictionary (persisted in `localStorage`)
- `assets/img/` — optimized imagery

## Run locally

```bash
docker compose up --build
# http://localhost:8081
```

Without Docker:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deploy

Any static host (GitHub Pages, Vercel, Netlify). For a custom domain, create a `CNAME` file with the domain (see `CNAME.example`).
