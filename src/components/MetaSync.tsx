import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  canonicalUrl,
  getRouteMeta,
  ogImageUrl,
} from "@/seo/routes";

function setTag(
  tag: "meta" | "link",
  key: string,
  keyValue: string,
  valueAttr: string,
  value: string,
) {
  let el = document.head.querySelector(`${tag}[${key}="${keyValue}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(key, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
}

/** Keeps head tags in step with the route after client-side navigation. */
export default function MetaSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    document.title = meta.title;
    setTag("meta", "name", "description", "content", meta.description);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (meta.noindex) {
      setTag("meta", "name", "robots", "content", "noindex");
      return;
    }
    robots?.remove();

    const url = canonicalUrl(meta.path);
    const image = ogImageUrl(meta.slug);
    setTag("link", "rel", "canonical", "href", url);
    setTag("meta", "property", "og:title", "content", meta.title);
    setTag("meta", "property", "og:description", "content", meta.description);
    setTag("meta", "property", "og:url", "content", url);
    setTag("meta", "property", "og:image", "content", image);
    setTag("meta", "name", "twitter:title", "content", meta.title);
    setTag("meta", "name", "twitter:description", "content", meta.description);
    setTag("meta", "name", "twitter:image", "content", image);
  }, [pathname]);

  return null;
}
