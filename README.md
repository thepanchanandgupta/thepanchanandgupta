# Premium Finance & Analytics Portfolio

A frontend-only, placeholder-first portfolio for an MBA/PGDM student focused on finance, analytics, consulting, risk, FinTech, and corporate finance. No personal facts are invented: replace the bracketed values with your own information.

## 1. Run locally

```bash
bun install
bun run dev
```

Open the local address shown in the terminal. Create a production build with `bun run build`.

## 2. Project structure

- `src/data/` — all editable personal content and TypeScript structures
- `src/components/` — reusable presentation sections and controls
- `src/pages/` — home, project detail, and poem reading compositions
- `src/routes/` — URL definitions and page metadata
- `src/config/` — non-personal site settings
- `src/styles.css` — color, typography, spacing, motion, and responsive system
- `public/` — resume, favicon, and static hosting helpers

## 3. Personal information

Start with `src/data/profile.ts`. It controls your name, monogram, photo, headline, introduction, role interests, availability, personal and academic emails, contact links, highlights, About copy, section titles, footer line, and default SEO text.

Every placeholder is intentionally bracketed. Search the project for `[` to find content still awaiting replacement.

## 4. Experience

Edit `src/data/experience.ts`. Add, remove, or reorder objects in the `experience` array. Set `type` to `work` or `internship`; the interface automatically separates the two timelines. Contributions, tools, achievements, and metrics are arrays and can contain any number of items.

## 5. Projects

Edit `src/data/projects.ts`. Each object automatically creates a home-page card and `/projects/<slug>` case study. Keep every `slug` unique and URL-safe. Use one of the defined categories so filtering works. Set `featured: true` for the emphasized treatment. Add as many projects as needed.

## 6. Education and certifications

Edit `src/data/education.ts`. Education and certifications are separate arrays. Add coursework and academic highlights as array items.

## 7. Skills

Edit `src/data/skills.ts`. Skills are grouped into Finance, Analytics, Technology, Business, Consulting, and Risk. Plain text is intentional; there are no artificial ratings.

## 8. Achievements

Edit `src/data/achievements.ts`. Add or remove achievement objects freely; the layout adapts.

## 9. Hobbies and interests

Edit `src/data/beyondWork.ts`. `size` accepts `small`, `wide`, or `tall`. Images are optional.

## 10. Poems

Edit `src/data/poems.ts`. Each poem creates `/writing/<slug>`. Preserve stanza breaks using blank lines inside the body string. Optional `hindi`, `urdu`, and `translation` fields display only when present. Urdu automatically renders right-to-left.

## 11. Photograph and other images

The profile photograph is stored as a CDN asset pointer at `src/assets/panchanand-gupta-portrait.jpeg.asset.json` and connected in `src/data/profile.ts`. To replace it, create a new asset pointer, update that import, and keep the descriptive alt text accurate. Leaving `photo` empty restores the neutral placeholder.

## 12. Resume

Place your real PDF at `public/resume.pdf`. The buttons already link to `/resume.pdf`. Delete `public/resume.pdf.txt` after adding the actual file. This repository intentionally does not contain a fake resume.

## 13. Visual system and colors

The visual identity lives in `src/styles.css`. Its reusable OKLCH tokens include `--surface-dark`, `--surface-deep`, `--accent-data`, and `--accent-finance`, plus the `--gradient-base`, `--gradient-tech`, and `--gradient-finance` treatments. Change these tokens rather than individual section colors to preserve the technology, analytics, finance, and editorial hierarchy.

## 14. Fonts

Font family tokens are in `src/styles.css`: `--font-sans` and `--font-serif`. Font loading links are in `src/routes/__root.tsx`. Update both places when changing fonts. The default pair is Geist and Newsreader, with Noto families for Hindi and Urdu.

## 15. Add or remove sections

Content-only changes belong in `src/data/`. To remove a whole section, remove its import/render from `src/pages/HomePage.tsx` and its item from `src/data/navigation.ts`. Keep section IDs and navigation IDs aligned.

## 16. Deployment

Run `bun run build`, then connect the repository to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. This project uses TanStack Start's file-based routing. Lovable/Vercel/Cloudflare adapters handle deep links directly. `public/404.html` and `.nojekyll` provide the common GitHub Pages redirect fallback; configure the host's output/build settings according to its TanStack Start guide.

## 17. Deep-link routing

Project and poem URLs are real typed routes, not hash-based pages. Route files are `src/routes/projects.$slug.tsx` and `src/routes/writing.$slug.tsx`. Do not edit `src/routeTree.gen.ts`; it is generated automatically. For static-only hosts, configure all unknown document requests to serve the application entry. The included GitHub Pages helper redirects unknown paths to `/`.

## 18. Contact form provider

The current form intentionally sends nothing and shows a clear demo state. To connect Formspree, Web3Forms, or another provider later, add its endpoint to the form submission handler in `src/components/Contact.tsx`, submit with `fetch`, handle loading/error/success states, and never commit a private API key. Provider-specific public form IDs may live in environment variables.

## SEO and social sharing

Default metadata lives in `src/data/profile.ts`; project and poem routes derive metadata from their data objects. Add a real, absolute HTTPS Open Graph image URL only after you have an actual image that appears on the page. Replace `public/favicon.ico` with your own favicon.

## Accessibility and motion

The site includes semantic sections, a skip link, visible focus states, keyboard-accessible navigation, proper Urdu direction, reduced-motion support, and mobile menu scroll locking. Recheck contrast and alt text after replacing colors and images.

## Verified contact details

The current profile configuration includes Panchanand Gupta's verified name, personal email, Great Lakes academic email, LinkedIn, and GitHub. The personal email is the default contact address; the academic address is displayed and copied separately.
