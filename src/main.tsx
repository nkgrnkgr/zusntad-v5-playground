import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const root = document.getElementById("root");
if (root !== null) {
  createRoot(root).render(
    <StrictMode>
      <div>a</div>
    </StrictMode>,
  );
}
