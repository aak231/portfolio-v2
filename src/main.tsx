import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
