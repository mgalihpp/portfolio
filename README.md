# mgalihpp portfolio

Personal portfolio and blog. Server rendered with TanStack Start and deployed on Vercel.

Live at https://mgalihpp.vercel.app.

## Stack

React 19, TanStack Start, TanStack Router with file based routing, Vite 8, Tailwind CSS 3, Sanity CMS for blog posts, PostHog for analytics. Package manager is Bun.

## Run it

```bash
bun install
bun run dev
```

Dev server runs on port 3000.

## Scripts

`bun run dev` starts the dev server. `bun run build` builds client and server. `bun run preview` previews the build. `bun run lint` lints. `bun run generate-routes` regenerates the route tree after adding files under `src/routes`.

## Environment

Copy what you need into `.env`. Reads are public. Writes need a token.

```bash
SANITY_TOKEN=
VITE_POSTHOG_KEY=
VITE_POSTHOG_HOST=https://app.posthog.com
```

`SANITY_PROJECT_ID` and `SANITY_DATASET` are optional. They default to the current project and dataset in code.

## Routes

`/` home. `/about` background and education. `/projects` selected work. `/blog` post list with search and tags. `/blog/$slug` post detail with server rendered meta. `/contact` links.

Blog content comes from Sanity through server functions in `src/server/blog.ts`. View counts increment there too, so the token never reaches the browser.

## SEO

Each route sets its own title, description, Open Graph tags, Twitter card, and canonical URL through the route `head`. Post pages add article tags and `BlogPosting` JSON-LD. `public/robots.txt` and `public/sitemap.xml` are served as is. Remember to add new post slugs to the sitemap.

## Sanity Studio

The `sanity/` folder holds a separate Sanity Studio. It uses pnpm and deploys on its own. It has nothing to do with the portfolio build.
