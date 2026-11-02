import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { SeoProvider } from "./components/Seo";
export { pageSeo, siteUrl } from "./data/seo";

export function render(path: string) {
  return renderToString(<StaticRouter location={path}><SeoProvider><App /></SeoProvider></StaticRouter>);
}
