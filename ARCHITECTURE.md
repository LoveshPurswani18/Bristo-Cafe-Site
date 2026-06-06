# System Architecture - Bristo Cafe Website

## Tech Stack
* **Framework**: React + Vite (React 19, Vite 8)
* **Styling**: Tailwind CSS v4.3 (integrated via `@tailwindcss/vite` plugin and `@theme` directive in CSS)
* **Icons**: Inline SVGs (for brands) & `lucide-react` (for generic utility icons)

## Folder Structure
```
Bristo-Cafe-Site/
├── index.html
├── package.json
├── vite.config.js
├── PRD.md
├── ARCHITECTURE.md
├── TASKS.md
├── UI_GUIDELINES.md
├── CONTENT.md
├── RULES.md
├── public/
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.css
    ├── App.jsx
    ├── assets/
    │   └── images/              <-- All image assets will reside here
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        ├── Menu.jsx
        └── Contact.jsx
```

## Key Technical Decisions
* **Vite build tool**: Selected for instant HMR (Hot Module Replacement) and optimized production bundles.
* **Tailwind CSS v4.3 configuration**: Configured directly in `src/index.css` via the `@theme` directive, avoiding the need for `tailwind.config.js` and keeping style configurations modern and unified in CSS.
* **Routing via React state**: Using simple `currentPage` state in `App.jsx` rather than React Router to avoid bundle overhead and keep the site fast and lightweight as a single-page experience.

## External Integrations
* [TODO: Map embeds, form handlers, etc.]

## Environment Variables
* [TODO: Environment variable requirements if any]

## Deployment Target
* [TODO: Vercel, Netlify, or custom hosting details]
