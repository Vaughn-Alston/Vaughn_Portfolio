# Vaughn Alston Portfolio

A minimal, responsive developer portfolio built to present Vaughn’s profile, technical toolkit, and selected projects in a recruiter-friendly one-page experience.

## Core features

- Fixed profile panel with portrait, role, availability, email, social links, résumé access, and copyright.
- Live Los Angeles time fetched securely on the server through the timezone.io API.
- Mission statement and full-stack expertise organized into Backend, Frontend, Cloud, Mobile, and Tools categories.
- Reusable technology cards driven by structured content data.
- Full-width project rows with images, descriptions, technology stacks, and external project links.
- Independently scrollable project workspace on larger screens.
- Responsive layouts for desktop, laptop, tablet, phone, and compact-phone widths.
- Accessible navigation, focus states, image descriptions, and reduced-motion support.
- Centralized profile, contact, social, résumé, and project content for straightforward updates.

## Responsive breakpoints

| Layout | Width |
| --- | --- |
| Desktop | `1440px` and wider |
| Laptop | `1024px–1439px` |
| Tablet | `768px–1023px` |
| Phone | Below `768px` |
| Compact phone | Below `480px` |

Desktop, laptop, and tablet use the split profile/workspace presentation. Phones switch to a vertically stacked page.

## Editing portfolio content

- Profile, email, social links, social icon paths, and résumé path: `app/content/site.ts`
- Expertise categories and technology icons: `app/content/proof.ts`
- Project data, images, stacks, and links: `app/Project_Experience/projects.json`
- Main page structure: `app/page.tsx`
- Design tokens and responsive styling: `app/globals.css`
- Public images and icons: `public/images` and `public/icons`

### Adding the résumé

The résumé button currently links to `/resume.pdf`. Add the final document here:

```text
public/resume.pdf
```

To use a different filename or external URL, update `site.resume.href` in `app/content/site.ts`.

## Local-time API setup

The timezone API token is used only by the server and is never exposed to the browser.

1. Copy `.env.example` to `.env.local`.
2. Add the timezone.io token after `TIMEZONE_API_TOKEN=`.
3. Restart the development server after changing the environment file.

If the API is unavailable or the token is missing, the clock displays an unavailable state instead of exposing credentials or failing the page.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run lint
npm run build
npm run start
```

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Geist typography

## Design direction

Minimal, technical, editorial, and quietly distinctive. The interface prioritizes fast comprehension, clear proof of work, and direct contact actions without unnecessary visual noise.
