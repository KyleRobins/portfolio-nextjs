# Repository Guidelines

## Project Structure & Module Organization
App Router entry lives in `src/app`, with `layout.tsx` handling the shared shell and `page.tsx` hosting the landing content. Reusable sections belong in `src/components`; use the `ui` subfolder for primitives and keep feature files like `hero.tsx` focused on layout. Shared config and copy sit in `src/lib` (`data.ts`, `utils.ts`), while static assets stay under `public` and design tokens live in `src/app/globals.css`.

## Build, Test, and Development Commands
Run `npm run dev` (or `pnpm dev`) to boot the Turbopack dev server at `http://localhost:3000`. Production assets come from `npm run build`; verify them locally with `npm run start`. Linting uses the Next preset via `npm run lint`—treat a clean run as a pre-PR requirement.

## Coding Style & Naming Conventions
Author UI in TypeScript; prefer server components by default and add `"use client"` only when interactivity demands it. Name component files with `PascalCase` and default-export a matching identifier; utility exports use `camelCase`. Tailwind classes follow the existing layout → spacing → color grouping, keep indentation at two spaces, and rely on ESLint (Next core web vitals) plus optional Prettier-on-save to stay consistent.

## Testing Guidelines
Automated tests are not yet present; introduce React Testing Library coverage alongside new work as `*.test.tsx` files or within `src/__tests__`. Exercise critical render states, ARIA roles, and motion toggles, and mirror the data from `src/lib/data.ts` to avoid brittle fixtures. Run `npm run lint` as a lightweight regression check until full test scripts are added.

## Commit & Pull Request Guidelines
Existing commits favor imperative subjects such as `Add hero section`; continue that tone and optionally prefix with a Conventional Commit type (`feat:`, `fix:`) for clarity. Keep changes scoped, describe them in the PR body, and list the commands you ran (`npm run lint`, `npm run build` when relevant). Attach screenshots for UI deltas, link tracking issues, and flag follow-ups in a checklist so reviewers can judge readiness quickly.

## Environment & Configuration Tips
Store secrets in `.env.local` and keep them out of version control; Next.js loads this file automatically. Update shared colors, radii, and typography through CSS variables in `globals.css` to keep them propagated across components. When adding new UI primitives, register them in `src/components/ui` and surface tokens through `components.json` when they need shared design settings.
