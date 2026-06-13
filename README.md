# Pablo Contreras — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

**Live site:** [pablocontreras.dev](https://pablocontreras.dev)

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Other commands

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Environment variables

Create a `.env` file in the project root (not committed to git):

```env
VITE_FORMSPREE_ID=your_formspree_id
```

The contact form uses [Formspree](https://formspree.io). **You must also set this variable in your hosting provider** (Vercel, Netlify, etc.) or the form will not work in production.

---

## Project structure

```
src/
├── components/       # UI sections (Hero, About, Projects, Contact…)
├── data/             # Editable content — start here for most changes
│   ├── projects.js
│   ├── technologies.js
│   └── social.js
├── config/
│   └── seo.js        # Title, description, domain, social meta
├── hooks/            # Reusable logic (scroll, animations)
└── assets/           # Images (photo, logo, project screenshots)

public/
├── cv-pablo-contreras.pdf
├── favicon.png
├── og-image.jpg      # Preview image when sharing on social media
├── robots.txt
└── sitemap.xml
```

---

## Common edits

| What you want to change | Where to edit |
|---|---|
| Add or edit a project | `src/data/projects.js` |
| Skills / proficiency bars | `src/data/technologies.js` |
| Email, GitHub, LinkedIn | `src/data/social.js` |
| Page title, SEO, domain | `src/config/seo.js` |
| Brand color (green) | `tailwind.config.js` → `colors.brand` |
| CV download | Replace `public/cv-pablo-contreras.pdf` |
| Social preview image | Replace `public/og-image.jpg` (1200×630 recommended) |
| Availability text | `src/components/Contact.jsx`, `src/components/About.jsx` |
| Navigation links | `src/components/Navbar.jsx`, `src/components/Footer.jsx` |

> **Note:** Social links also appear in `src/config/seo.js` for structured data (JSON-LD). Update both `social.js` and `seo.js` when changing email or profiles.

---

## Deploy

**Build command:** `npm run build`  
**Output directory:** `dist`

Works with Vercel (`vercel.json` included) or Netlify (`public/_redirects` included).

Before deploying:

1. Set `VITE_FORMSPREE_ID` in the hosting environment variables.
2. Confirm `SITE_URL` in `src/config/seo.js` matches your real domain.
3. Update `public/sitemap.xml` if needed.

---

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 3
- Lucide React & Simple Icons
- Formspree (contact form)
