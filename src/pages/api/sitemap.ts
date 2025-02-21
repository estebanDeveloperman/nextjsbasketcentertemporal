import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = "https://clubbasketcenter.com";

  // Define tus rutas estáticas
  const pages = ["/", "/galeria", "/tienda"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${page === "/" ? "1.0" : "0.8"}</priority>
        </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
