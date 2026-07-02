import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const base = `${url.protocol}//${url.host}`;
        const today = new Date().toISOString().split("T")[0];

        const staticPaths: Array<{ path: string; priority: string; changefreq: string }> = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/about", priority: "0.8", changefreq: "monthly" },
          { path: "/services", priority: "0.9", changefreq: "monthly" },
          { path: "/portfolio", priority: "0.9", changefreq: "weekly" },
          { path: "/contact", priority: "0.7", changefreq: "monthly" },
        ];

        const projectEntries = projects.map((p) => ({
          path: `/portfolio/${p.slug}`,
          priority: "0.6",
          changefreq: "monthly",
        }));

        const urls = [...staticPaths, ...projectEntries]
          .map(
            ({ path, priority, changefreq }) =>
              `  <url><loc>${base}${path}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
