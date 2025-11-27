# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Photography portfolio website for Emanuel Della Pia built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Routing & Layout

- **App Router**: Uses Next.js App Router with file-based routing
- **Root Layout** (`app/layout.tsx`): Configures fonts (Lato + Geist Mono), ThemeProvider, persistent Navbar/Footer, and ModeToggle
- **Route Groups**: Home page uses `(home)` route group for organization
- **Pages**: Home (`/`), About (`/about`), Contact (`/contact`)

### Navigation System

Navigation managed through centralized config:
- Routes defined in `lib/routes.ts`
- Nav items configured in `lib/navigation.ts` with type safety via `NavItem` type
- Navbar (`components/layout/navbar/index.tsx`):
  - Uses Headroom.js for hide/show on scroll behavior
  - Transparent on homepage until 70% scroll or dropdown opens
  - Responsive with separate `DesktopMenu` and `MobileMenu` components
  - Custom hooks: `useScrollPosition` and `useKeyPress` (ESC to close dropdown)
  - Fixed height: `NAVBAR_HEIGTH` = 55.75px (note typo in constant name)

### Theming & Styling

- **Dark Mode**: Managed by `next-themes` via `ThemeProvider` (system/light/dark)
- **Tailwind 4**: Uses new `@theme inline` config in `globals.css`
- **Color System**: OKLCH color space for light/dark themes
- **Custom Utilities**:
  - `.overlay-white-y` - Gradient overlay for navbar
  - `.headroom` classes for scroll behavior
- **UI Components**: Radix UI primitives (dropdown-menu, collapsible, separator) with custom styling

### Key Components

- **Headroom** (`components/headroom.tsx`): Wrapper for headroom.js with configurable offset/tolerance
- **Container** (`components/container.tsx`): Reusable container component
- **Typography** (`components/typohraphy.tsx`): Typography system with variants
- **Link** (`components/link.tsx`): Custom link wrapper
- **ModeToggle** (`components/mode-toggle.tsx`): Theme switcher (fixed bottom-left)
- **Gallery Components**: `HeroGallery` and `Gallery` in `app/(home)/components/`
- **Carousel**: Uses Embla Carousel with autoplay and fade plugins

### Data & Config

- **Contact Info** (`lib/contact.ts`): Email, phone, address, and social links
- **Layout Constants** (`constants/layout.ts`): `NAVBAR_HEIGTH`, `FOOTER_HEIGHT`
- **TypeScript Paths**: `@/*` alias maps to project root

### Custom Hooks

Located in `hooks/`:
- `useScrollPosition`: Track window scroll position
- `useKeyPress`: Listen for specific key events

## Code Conventions

- Use `"use client"` directive for client components
- Import from `@/` path alias
- Footer height: 72px, Navbar height: 55.75px
- Main content min-height: `calc(100vh - FOOTER_HEIGHT)`
- NavbarSpacer component accounts for fixed navbar
