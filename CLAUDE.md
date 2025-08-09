# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + Vite landing page application for Kindred, a relationship-focused platform. The app is a single-page waitlist signup form with custom branding and Tailwind CSS styling.

## Development Commands

**Development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Linting and formatting:**
```bash
npm run lint      # ESLint with auto-fix
npm run format    # Prettier formatting
```

**Package management:**
```bash
npm install       # Install dependencies
```

## Architecture & Structure

### Tech Stack
- **Vue 3** with Composition API
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling with custom theme
- **ESLint + Prettier** for code quality

### Key Configuration
- **Vite config:** Standard Vue 3 setup with `@` alias pointing to `/src`
- **Tailwind:** Custom colors (`kindred: #7868E6`, `dark: #060505`) and font family (Rubik)
- **Path aliases:** `@/*` maps to `./src/*` (jsconfig.json)

### Application Structure
- **Single-page app** centered around waitlist signup
- **Main component:** `src/App.vue` contains entire landing page
- **Form integration:** Uses Loops.so newsletter service (endpoint needs configuration)
- **Assets:** Custom logo (`kindred.svg`) and minimal styling

### Styling Approach
- **Tailwind-first:** Utility classes for most styling
- **Custom theme:** Extended with Kindred brand colors and Rubik font
- **Responsive design:** Mobile-first with `md:` breakpoints
- **Component styles:** Minimal scoped CSS in Vue components

### Development Notes
- Form endpoint at line 17 and 60 in `App.vue` needs actual Loops.so URL
- Logo path uses `/assets/kindred.svg` (public assets)
- Unused commented code sections in `App.vue` (roadmap/changelog links)
- No router or state management - single component application