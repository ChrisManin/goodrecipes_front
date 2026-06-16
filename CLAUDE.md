# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server at http://0.0.0.0:3000
yarn build        # Production build
yarn generate     # Static site generation
yarn preview      # Preview production build
```

No lint or test commands are configured yet.

## Styling

**Tailwind CSS v4** via `@tailwindcss/vite` (Vite plugin, pas le module Nuxt).

- Point d'entrée CSS : `app/assets/css/main.css` — contient uniquement `@import "tailwindcss";`
- Configuration Tailwind : CSS-first (pas de `tailwind.config.js`). Toute personnalisation (thème, plugins) se fait dans `main.css` avec des directives `@theme`, `@plugin`, etc.
- Le plugin est déclaré dans `nuxt.config.ts → vite.plugins`.

## Architecture

**Stack**: Nuxt 4 (Vue 3) + TypeScript, backed by a Drupal JSON API.

### Key directories (Nuxt 4 layout — source lives under `app/`)

- `app/pages/` — File-based routing. `index.vue` → `/`.
- `app/components/` — Auto-imported Vue components (currently empty).
- `app/composables/` — Auto-imported composables.
- `app/layouts/` — Named layouts (currently unused; root layout is `app/app.vue`).
- `server/` — Nitro server routes (currently empty).

### Backend integration

All API calls go through `app/composables/useDrupalFetch.ts`. It wraps Nuxt's `$fetch`, automatically prefixes the `drupalBaseUrl` runtime config value, and sets `Accept: application/json`. Pass additional options (headers, method, body) as the second argument.

```ts
const { data, error, pending } = await useDrupalFetch('/api/some-endpoint?_format=json')
```

### Environment

```
BASE_URL_BACK_LOCAL=https://good-recipes.local:8000   # local Drupal (WAMP)
NODE_TLS_REJECT_UNAUTHORIZED=0                         # allows self-signed certs in dev
```

The runtime config key exposed to the client is `NUXT_PUBLIC_DRUPAL_BASE_URL` (see `nuxt.config.ts → runtimeConfig.public.drupalBaseUrl`). Set `BASE_URL_BACK_LOCAL` in `.env` to override it locally.

### Data fetching pattern

Pages use `useAsyncData` + `useDrupalFetch` for SSR-compatible fetching (see `app/pages/index.vue` for the canonical example). No global state manager (Pinia, Vuex) is in place yet.
