import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import { SITE } from "./data/site";

export async function render(path: string) {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(new URL(path, SITE.url)));
  if (context instanceof Response) {
    throw new Error(`Unexpected redirect while prerendering ${path}`);
  }
  const router = createStaticRouter(handler.dataRoutes, context);
  // hydrate={false}: no inline script is added next to the app markup, so hydration matches.
  return renderToString(
    <StaticRouterProvider router={router} context={context} hydrate={false} />,
  );
}

export { ROUTE_META, NOT_FOUND_META, headTags, canonicalUrl } from "./seo/routes";
export { SITE } from "./data/site";
