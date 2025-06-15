# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.1 application using the App Router, React 19, TypeScript 5, and Tailwind CSS v4. The project is configured with shadcn/ui for component development.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/lib/` - Utility functions (includes `cn()` for className merging)
- `src/components/` - React components (when added via shadcn/ui)
- `public/` - Static assets

### Key Technologies
- **Next.js 15** with App Router (not Pages Router)
- **React Server Components** enabled
- **TypeScript** with strict mode
- **Tailwind CSS v4** with PostCSS
- **shadcn/ui** configured with New York style and Lucide icons

### Path Aliases
- `@/*` maps to `./src/*`
- Component imports use `@/components`, `@/lib/utils`, etc.

### shadcn/ui Integration
When adding shadcn/ui components:
- Components go to `@/components/ui`
- Use the existing `cn()` utility from `@/lib/utils`
- CSS variables are enabled for theming
- Lucide React is available for icons