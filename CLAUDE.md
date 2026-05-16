# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Next.js dev server at localhost:3000
npm test         # run all tests with Vitest
npm run lint     # run ESLint
npm run build    # production build
```

Run a single test file:

```bash
npm test -- tests/components/AuthForm.test.tsx
```

Run tests matching a name pattern:

```bash
npm test -- -t "password toggle"
```

## Architecture

**Pocket Heist** is a Next.js 16 (App Router) app using TypeScript, Tailwind CSS v4, and Lucide React icons.

### Route groups

- `app/(public)/` — unauthenticated pages (`/login`, `/signup`). Layout renders a bare `<main>` with no nav.
- `app/(dashboard)/` — authenticated pages under `/heists`. Layout wraps content with the `<Navbar>` component.

### Path alias

`@/*` maps to the project root, so imports use `@/components/...`, `@/app/...` etc.

### Styling

Global styles and the Tailwind theme live in `app/globals.css`. Custom CSS variables are declared with `@theme` (Tailwind v4 syntax) — use them as utility classes: `text-primary`, `bg-dark`, `text-body`, etc. Shared utility classes (`.btn`, `.page-content`, `.center-content`, `.form-title`) are defined there too. Component-scoped styles use CSS Modules (e.g. `Navbar.module.css`).

### Components

Reusable components live in `components/<ComponentName>/`, exported via a barrel `index.ts`. Each component folder contains the `.tsx` file and, if needed, a `.module.css` file.

### Testing

Tests live in `tests/components/` and use Vitest + Testing Library (`@testing-library/react`, `@testing-library/user-event`). The `jsdom` environment is configured in `vitest.config.mts`; `@testing-library/jest-dom` matchers are available globally via `vitest.setup.ts`.
