# Premium Finance & Analytics Portfolio

## Goal
Build a complete, frontend-only personal portfolio with clearly visible placeholders and an editorial consulting/FinTech visual system. Personal content will live in typed files under `src/data/` so the exported site can be customized without touching presentation code.

## Build scope
- Create a configurable warm-ivory, charcoal, and deep-teal design system with Newsreader and Geist typography, restrained motion, accessible focus states, and responsive layouts.
- Add shared navigation, skip link, mobile menu with scroll lock, section headings, reveal effects, image placeholders, footer, and reusable timeline/card controls.
- Build the full home journey: hero, highlights, about, experience and internships, projects with filters, education and certifications, skills, achievements, Beyond Work, writing, and contact.
- Add individual project case-study routes at `/projects/:slug` with featured treatment and previous/next navigation.
- Add accessible poem reading routes at `/writing/:slug`, including preserved stanza formatting plus optional Hindi, Urdu RTL, and translation blocks.
- Keep all names, links, dates, metrics, institutions, employers, projects, and creative work as explicit bracketed placeholders.
- Add a frontend-only contact form placeholder, email copy action, resume placeholder reference, static-host SPA fallback files, metadata configuration, and a detailed customization/deployment README.

## Technical approach
- Preserve the TanStack Start/Router project architecture (the supported React router in this project) while delivering static-compatible frontend pages and typed routes.
- Use typed data modules for profile, navigation, experience, projects, education, skills, achievements, interests, and poems.
- Use CSS/Tailwind tokens for all visual values; accent color and font families remain globally configurable.
- Avoid backend services, authentication, databases, and external APIs.
- Validate compilation plus desktop and mobile rendering, navigation, filters, menus, copy action, form state, and detail-page traversal.
