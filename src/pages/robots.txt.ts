import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
	const lines = ['User-agent: *', 'Allow: /', ''];
	if (site) {
		const sitemapUrl = new URL('sitemap-index.xml', site);
		lines.push(`Sitemap: ${sitemapUrl.href}`);
	}
	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
