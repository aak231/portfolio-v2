import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./routes";

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason;
  if (
    reason instanceof DOMException &&
    reason.name === "InvalidStateError" &&
    reason.message.includes("Transition")
  ) {
    event.preventDefault();
  }
});

const router = createBrowserRouter(routes);
const rootEl = document.getElementById("root")!;
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// Prerendered pages already contain markup, so hydrate; in `npm run dev` the root is empty.
if (rootEl.firstElementChild) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
