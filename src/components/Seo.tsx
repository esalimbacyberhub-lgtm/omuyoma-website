import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { legalService, pageSeo, siteUrl } from "../data/seo";

const SeoContext = createContext(false);

export function SeoProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const path = location.pathname;
  const seoPath = pageSeo[path] ? path : "/404";
  const meta = pageSeo[seoPath];

  useEffect(() => {
    document.title = meta.title;
    const set = (selector: string, attr: string, value: string) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!element) { element = document.createElement(selector.startsWith("link") ? "link" : "meta"); document.head.append(element); }
      element.setAttribute(attr, value);
    };
    const canonical = `${siteUrl}${path}`;
    set('meta[name="description"]', "content", meta.description);
    set('link[rel="canonical"]', "href", canonical);
    set('meta[property="og:title"]', "content", meta.title);
    set('meta[property="og:description"]', "content", meta.description);
    set('meta[property="og:url"]', "content", canonical);
    set('meta[property="og:type"]', "content", "website");
    set('meta[property="og:image"]', "content", `${siteUrl}/logo.png`);
    set('meta[property="og:site_name"]', "content", "Omuyoma & Co. Advocates");
    set('meta[name="twitter:card"]', "content", "summary");
    set('meta[name="twitter:image"]', "content", `${siteUrl}/logo.png`);
    set('meta[name="twitter:title"]', "content", meta.title);
    set('meta[name="twitter:description"]', "content", meta.description);
  }, [meta, path]);

  return <SeoContext.Provider value>{children}<StructuredData /></SeoContext.Provider>;
}

export function StructuredData() {
  const active = useContext(SeoContext);
  return active ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }} /> : null;
}
