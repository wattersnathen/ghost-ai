# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Feature 03: Auth — Complete

## Current Goal

- Define the immediate implementation goal here.

## Completed

- 01-design-system: shadcn/ui initialized (new-york style, Tailwind v4), Button/Card/Dialog/Input/Tabs/Textarea/ScrollArea installed, lucide-react installed, lib/utils.ts cn() helper created, globals.css written with full dark-only theme matching ui-context.md tokens.
- 02-editor-chrome: `components/editor/editor-navbar.tsx` (fixed-height top navbar, left/center/right sections, sidebar toggle button using PanelLeftOpen/PanelLeftClose), `components/editor/project-sidebar.tsx` (fixed floating overlay sidebar, slides in from left via translate-x, does not push content, header with title + close button, shadcn Tabs for My Projects/Shared with empty placeholders, full-width New Project button with Plus icon), `components/editor/editor-dialog.tsx` (generic reusable dialog pattern wrapping components/ui/dialog.tsx primitives with title/description/footer props, rounded-3xl per modal radius convention — no concrete dialogs built yet).
- 03-auth: `app/layout.tsx` wraps root in `ClerkProvider` using `@clerk/ui/themes` `dark` theme, with `variables` overridden to reference the app's existing CSS custom properties (`var(--accent-primary)`, `var(--bg-surface)`, etc.) instead of hardcoded colors. `proxy.ts` at project root runs `clerkMiddleware`, builds the public-route matcher from `NEXT_PUBLIC_CLERK_SIGN_IN_URL`/`NEXT_PUBLIC_CLERK_SIGN_UP_URL` env vars, and calls `auth.protect()` on everything else. Editor UI moved from `app/page.tsx` to `app/editor/page.tsx` (now a protected route); `app/page.tsx` is a server component that reads `auth()` and redirects to `/editor` (signed in) or `/sign-in` (signed out). `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx` use a two-panel layout (left: compact logo/tagline/feature list, hidden below `lg`; right: centered Clerk form), no gradients/hero/cards. `components/editor/editor-navbar.tsx` right section simplified to just Clerk's `UserButton` since `/editor` is always authenticated (removed the old signed-out `SignInButton`/`SignUpButton` branch). `npm run build` passes.

## In Progress

- None yet.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Dark-only theme: single :root block in globals.css, no light mode overrides. `dark` class on `<html>` activates shadcn's dark variant.
- @theme inline uses literal Geist font family names (not var() references) to avoid Tailwind v4 circular resolution issue.
- shadcn semantic tokens (--background, --card, etc.) mapped to project design tokens in :root. Project utilities (bg-base, bg-surface, text-copy-primary, etc.) exposed via --color-* entries in @theme inline.
- components/ui/* are not modified after installation per ai-workflow-rules.md.

## Session Notes

- Add context needed to resume work in the next session.
