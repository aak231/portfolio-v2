import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/** Scrolls to #hash targets, and to the top on new page navigations. */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();
  const first = useRef(true);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        first.current = false;
        return;
      }
    }
    if (first.current) {
      first.current = false;
      return;
    }
    if (navType !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, key, navType]);

  return null;
}
