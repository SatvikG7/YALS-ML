import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const headersList = {
        Accept: "*/*",
        Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
        "Content-Type": "application/json",
    };

    const reqOptions: AxiosRequestConfig = {
        url: process.env.VERCEL_API_URL,
        method: "GET",
        headers: headersList,
    };

    const response = await axios(reqOptions);
    const lastmod = await new Date(response.data.deployments[0].ready);
    const data = `
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
			<loc>https://yals-ml.vercel.app/</loc>
			<lastmod>${await lastmod.toISOString().split("T")[0]}</lastmod>
			<changefreq>weekly</changefreq>
			<priority>1.0</priority>
		</url>
		<url>
			<loc>https://yals-ml.vercel.app/api/auth/signin/</loc>
			<lastmod>${await lastmod.toISOString().split("T")[0]}</lastmod>
			<changefreq>weekly</changefreq>
			<priority>0.9</priority>
		</url>
	</urlset>
	`;
    await res
        .status(200)
        .setHeader("Content-Type", "application/xml")
        .send(data);
}
