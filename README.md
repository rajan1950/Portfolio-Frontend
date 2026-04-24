# Premium Portfolio (React + Vite)

A fully responsive one-page portfolio in a modern dark-to-warm gradient style with:

- Hero with contact details
- Summary section
- Project timeline cards
- Skills and tools section
- Languages progress bars
- Links/contact section
- Floating bottom navigation with active section highlight

## Personalize Your Data

Edit all your personal information from one file:

- src/data/portfolioData.js

You can replace:

- Name, role, location, phone, email
- Summary and quote
- Projects, features, tech stack, links
- Skills, tools, education, experience, certificates
- Social links and footer text

## Logo URL Setup

You can set online logo URLs directly from:

- src/data/portfolioData.js

Fields supporting logo URLs:

- skills.tools[].logoUrl
- links.social[].logoUrl

If any logo URL fails to load, the UI automatically shows a text fallback badge.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in terminal.

## Backend Integration

This frontend can read live portfolio data from your backend APIs:

- `GET /api/projects`
- `GET /api/skills`
- `POST /api/visitor/track` (optional analytics)
- `POST /api/contact` (optional contact form integration)

Create a `.env` file in the frontend root:

```bash
VITE_API_BASE_URL=http://localhost:5000
VITE_API_PREFIX=/api
```

If the backend is unavailable or returns empty lists, the app automatically falls back to `src/data/portfolioData.js`.

Backend requirements:

- Backend server must be running before frontend requests (`npm run dev` in backend).
- Backend CORS must include your frontend origin (`http://localhost:5173` for Vite).
- MongoDB must be available for backend API reads.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

- src/main.jsx: React entry point
- src/App.jsx: App composition and section assembly
- src/components/common/: Shared UI building blocks
- src/components/sections/: Home, Summary, Projects, Skills, Links sections
- src/constants/navigation.js: Bottom navigation items
- src/data/portfolioData.js: All editable portfolio content
- src/hooks/useActiveSection.js: Active section observer logic
- src/styles/main.css: Complete responsive styling and theme
