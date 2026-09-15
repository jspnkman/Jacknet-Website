# Build Commands

## Build & Run Production

```bash
npm install          # Install dependencies
npm run build        # Production build
npm start            # Start production server
```

## Development

```bash
npm run dev          # Start development server with Turbopack
```

## Lint & Type Check

```bash
npm run lint         # TypeScript & ESLint check
npx tsc --noEmit     # Type checking
```

# Tailwind CSS 4 Setup

## Key Changes from Tailwind CSS 3

1. Use `@import "tailwindcss"` instead of `@tailwind` directives
2. CSS variables for colors must be applied via custom CSS, not utility classes like `border-border`
3. Utility classes referring to CSS variables need explicit theme configuration

## globals.css Pattern

```css
@import "tailwindcss";

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --border: 214.3 31.8% 91.4%;
    /* ... other variables ... */
  }
}

@layer base {
  * {
    border-color: var(--border);
  }
  body {
    background-color: var(--background);
    color: var(--foreground);
  }
}
```

**Do NOT use** `@tailwind base;` or `@apply border-border;` with CSS variables in Tailwind CSS 4.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
