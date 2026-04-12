# Tarka marketing site

Static [Astro](https://astro.build/) **single-page** site for **Tarka** — overview, why Tarka, live demo embed, Loom walkthrough, and get-started snippets on one scrollable page, with anchor navigation. Links to the [canonical repo](https://github.com/pamu512/tarka). Old paths `/why`, `/demo`, and `/get-started` redirect to `/#why`, `/#demo`, and `/#get-started` on Netlify.

**Audience deep links:** open a section directly with a query string (hash is applied after load):

- `?role=developers` or `?audience=dev` → developers
- `?role=operations` or `?audience=ops` → fraud & risk operations
- `?role=leaders` or `?audience=executives` → executives / sponsors
- `?role=investors` → investors & partners

Example: `https://yoursite.netlify.app/?role=operations`

**Essays:** [Medium @tarka](https://medium.com/@tarka) — linked from the site footer and hero.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Environment

Copy [`.env.example`](.env.example) to `.env` and set at least `PUBLIC_SITE_URL` for correct metadata in production.

| Variable | Purpose |
|----------|---------|
| `PUBLIC_SITE_URL` | Canonical site origin (no trailing slash). Required for sitemap and `og:url`. |
| `PUBLIC_DEMO_URL` | HTTPS origin of the public Tarka lite UI. When unset, the **Demo** section explains how to configure it. |
| `PUBLIC_LOOM_URL` | Optional override for the embedded walkthrough video. |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Optional [Plausible](https://plausible.io/) analytics `data-domain`. |

## Deploy

Build output is `dist/`:

```bash
npm run build
npm run preview
```

### Netlify (recommended for this repo)

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In [Netlify](https://app.netlify.com/), choose **Add new site** → **Import an existing project**, select the repo, and confirm:
   - **Build command:** `npm run build` (already set in [`netlify.toml`](netlify.toml))
   - **Publish directory:** `dist`
3. Under **Site configuration** → **Environment variables**, add (at minimum):
   - `PUBLIC_SITE_URL` — your live site URL, e.g. `https://your-site.netlify.app` or your custom domain (no trailing slash).
   - Optionally: `PUBLIC_DEMO_URL`, `PUBLIC_LOOM_URL`, `PUBLIC_PLAUSIBLE_DOMAIN` (see table above).
4. Trigger a new deploy. Netlify runs `npm install` and `npm run build` on each push.

**Local Netlify dev** (optional): install the [Netlify CLI](https://docs.netlify.com/cli/get-started/), then from this folder run `netlify dev` to use the `[dev]` block in `netlify.toml`.

### Other hosts

You can deploy `dist/` to Vercel, Cloudflare Pages, or any static host; set the same `PUBLIC_*` variables in that host’s dashboard.

## Public demo (operators)

See [`deploy/README.md`](deploy/README.md) for running the upstream **lite** Docker stack behind HTTPS and wiring `PUBLIC_DEMO_URL`.

## License

Branding and copy support the Tarka OSS project; site code is provided for your use in promoting the repository.
