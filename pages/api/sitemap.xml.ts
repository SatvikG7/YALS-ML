import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = `
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
			<loc>https://yals.ml/</loc>
			<lastmod>2021-12-15T08:04:23+00:00</lastmod>
			<changefreq>weekly</changefreq>
			<priority>1.0</priority>
		</url>
		<url>
			<loc>https://yals.ml/api/auth/signin/</loc>
			<lastmod>2021-12-15T08:04:23+00:00</lastmod>
			<changefreq>monthly</changefreq>
			<priority>0.9</priority>
		</url>
	</urlset>
	`;
	res.status(200)
		.setHeader("Content-Type", "application/xml")
		.send(data);
}
