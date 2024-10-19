import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoList } from "./TodoList";
const root = document.getElementById("root");
if (root !== null) {
  createRoot(root).render(
    <StrictMode>
      <TodoList />
    </StrictMode>,
  );
}
