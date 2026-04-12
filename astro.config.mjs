// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set PUBLIC_SITE_URL in production (e.g. Vercel/Netlify) for canonical URLs and sitemap.
const site = process.env.PUBLIC_SITE_URL || 'https://tarka.marketing.local';

export default defineConfig({
	site,
	trailingSlash: 'never',
	integrations: [sitemap()],
});
