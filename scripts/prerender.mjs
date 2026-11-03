import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const esc = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const routes = ["/", "/about", "/team", "/practice-areas", "/practice-areas/civil-litigation", "/practice-areas/property", "/practice-areas/corporate", "/practice-areas/employment", "/practice-areas/family", "/practice-areas/intellectual-property", "/insights", "/contact", "/404"];
try {
  const { render, pageSeo, siteUrl } = await import(pathToFileURL(path.resolve(".ssr-temp/ssr.js")));
  const template = await readFile("dist/index.html", "utf8");
  for (const route of routes) {
    const seoPath = route === "/404" ? route : route;
    const meta = Object.fromEntries(Object.entries(pageSeo[seoPath]).map(([k, v]) => [k, esc(v)]));
    const canonical = `${siteUrl}${route === "/404" ? "/404" : route}`;
    const headTags = `<title>${meta.title}</title><meta name="description" content="${meta.description}"><link rel="canonical" href="${canonical}"><meta property="og:title" content="${meta.title}"><meta property="og:description" content="${meta.description}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="website"><meta property="og:image" content="${siteUrl}/logo.png"><meta property="og:site_name" content="Omuyoma &amp; Co. Advocates"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="${meta.title}"><meta name="twitter:description" content="${meta.description}"><meta name="twitter:image" content="${siteUrl}/logo.png">`;
    const html = template.replace(/<meta name="description"[^>]*>/, "").replace(/<title>.*?<\/title>/s, headTags).replace('<div id="root"></div>', `<div id="root">${render(route === "/404" ? "/__missing_page__" : route)}</div>`);
    const target = route === "/" ? "dist/index.html" : route === "/404" ? "dist/404.html" : path.join("dist", route.slice(1), "index.html");
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, html);
  }
} finally {
  await rm(".ssr-temp", { recursive: true, force: true });
}
