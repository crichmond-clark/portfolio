# Portfolio Site Cleanup & Build-Out Plan

## 1. Problem Statement

Google Stitch AI generated a portfolio landing page with a strong dark minimal aesthetic (particle canvas, geometric shapes, grain overlay, premium typography). However, the code has AI scaffolding artifacts, unused dependencies, and only a hero section. We need to clean it up and build out a Projects section and About section while preserving the exact visual design.

## 2. Goals & Non-Goals

**Goals:**
- Preserve the Stitch design exactly — dark aesthetic, animations, typography, grain overlay
- Clean up all AI Studio artifacts, unused deps, dead code
- Add a Projects section with content driven by markdown files
- Add an About section
- Update nav links to point to real sections
- Produce clean, well-structured code with proper component boundaries

**Non-Goals:**
- Blog/Journal section (deferred)
- CMS integration (deferred — markdown files are fine for now)
- Contact form (deferred)
- Deployment setup (deferred)
- Adding new pages/routes — everything lives on the single landing page for now

## 3. Proposed Architecture

Keep Next.js 15 (App Router) since the prototype is already built in it and the user knows React. The site is a single-page layout with smooth scroll navigation to sections.

**Content approach:** Markdown files with frontmatter in `src/content/projects/`. Each project is a `.md` file. The Projects section reads these at build time.

**Component structure:** Extract the monolithic `page.tsx` into focused components. Each section (Hero, Projects, About) gets its own component file.

## 4. Component Breakdown

- **`app/layout.tsx`** — Root layout, fonts, metadata (exists, needs minor cleanup)
- **`app/page.tsx`** — Composes sections, minimal orchestration
- **`app/globals.css`** — Theme tokens, grain overlay, animations (exists, needs cleanup)
- **`components/navbar.tsx`** — Fixed nav with updated section links (exists, needs link updates)
- **`components/hero-background.tsx`** — Canvas particle system (exists, clean as-is)
- **`components/hero.tsx`** — Extracted hero content from page.tsx
- **`components/projects.tsx`** — New projects grid section
- **`components/project-card.tsx`** — Individual project card
- **`components/about.tsx`** — New about section
- **`components/footer.tsx`** — Footer (exists, needs copyright year fix)
- **`lib/content.ts`** — Helper to read/parse markdown project files at build time
- **`content/projects/*.md`** — Markdown project files with frontmatter

## 5. Data Flow

1. At build time, `lib/content.ts` reads all `.md` files from `content/projects/`
2. Each file's frontmatter provides metadata (title, description, tech stack, links, image)
3. `projects.tsx` receives parsed project data and renders `ProjectCard` components
4. `page.tsx` composes Hero → Projects → About → Footer

## 6. Interface Contracts

### Project Frontmatter Schema

```ts
interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}
```

### Content Helper

```ts
// lib/content.ts
function getProjects(): Project[]
```

## 7. File Changes

### Create:
- `content/projects/placeholder.md` — Example project markdown file
- `components/hero.tsx` — Extracted hero section
- `components/projects.tsx` — Projects grid section
- `components/project-card.tsx` — Individual project card
- `components/about.tsx` — About me section
- `lib/content.ts` — Markdown parsing helper

### Modify:
- `app/page.tsx` — Replace inline hero JSX with composed section components
- `app/globals.css` — Remove `@import "tw-animate-css"`, clean up if needed
- `app/layout.tsx` — Update metadata (title, description) with real values
- `components/navbar.tsx` — Update nav links to #hero, #projects, #about, remove dead links
- `components/footer.tsx` — Fix copyright year, update social links to real URLs
- `package.json` — Remove unused deps, rename package

### Delete:
- `metadata.json` — Empty AI Studio artifact
- `.env.example` — Gemini API key template (unused)
- `README.md` — AI Studio deployment instructions (will recreate)
- `hooks/use-mobile.ts` — Unused
- `zip.zip` / `zip.zip:Zone.Identifier` — Original zip file

### Dependencies to remove:
- `@google/genai` — Unused AI Studio artifact
- `@hookform/resolvers` — Unused
- `firebase-tools` — Unused
- `tw-animate-css` — Unused
- `@tailwindcss/typography` — Unused (will add back if needed later)

### Dependencies to add:
- `gray-matter` — Parse markdown frontmatter (~5M weekly downloads, well-maintained)

## 8. Implementation Phases

### Phase 1 — Cleanup & Scaffold
- Branch: `feature/portfolio-cleanup`
- Commits:
  - [ ] Remove unused dependencies, AI Studio artifacts, dead files
  - [ ] Rename package from `ai-studio-applet` to `portfolio`
  - [ ] Extract hero into `components/hero.tsx`, slim down `page.tsx`
  - [ ] Update navbar links, fix footer copyright year
- Done when: `npm run dev` starts clean, hero renders identically to before

### Phase 2 — Content System & Projects Section
- Branch: `feature/portfolio-cleanup`
- Commits:
  - [ ] Add `gray-matter`, create `lib/content.ts` and `content/projects/` with placeholder data
  - [ ] Build `ProjectCard` component matching the existing design language
  - [ ] Build `Projects` section with grid layout
  - [ ] Wire into `page.tsx`
- Done when: Projects section renders below hero with placeholder data, smooth scroll from nav works

### Phase 3 — About Section
- Branch: `feature/portfolio-cleanup`
- Commits:
  - [ ] Build `About` section component with placeholder content
  - [ ] Wire into `page.tsx`, add nav link
- Done when: Full page renders Hero → Projects → About → Footer, all nav links scroll correctly

## 9. Testing Strategy

- Manual visual verification at each phase — ensure design is preserved
- `npm run build` must pass with no errors at each phase
- `npm run lint` must pass at each phase
- Test on mobile viewport (navbar responsive behavior)
- No automated tests needed for a static portfolio at this stage

## 10. Security Implications

No security implications. This is a static site with no user input, no authentication, no database, and no API endpoints. The `gray-matter` library parses local markdown files at build time only — no runtime user input is involved.

## 11. Risks & Tradeoffs

- **Risk:** Breaking the particle canvas or animations during refactor
  - **Mitigation:** Keep `hero-background.tsx` untouched, extract hero content only
- **Risk:** Design inconsistency in new sections
  - **Mitigation:** Reuse the exact same color tokens, font classes, spacing patterns from the hero
- **Tradeoff:** Using markdown files means editing content in code — but this is simple, version-controlled, and sufficient for a portfolio

## 12. Open Questions

1. **Real content** — The hero text ("ARCHITECT.DEV", "Digital Alchemist", etc.) is placeholder. What should the actual name, title, and description be?
2. **Social links** — What are the real Instagram, Twitter, LinkedIn, Read.cv URLs?
3. **About section content** — What should it say? Bio, photo, tech stack list?
4. **Project data** — How many projects to show? Should they link to case study pages or just external links?

These don't block implementation — placeholders will be used and can be swapped later.
