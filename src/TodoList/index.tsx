import { useShallow } from "zustand/shallow";
import { useAppStore } from "../store";
import { AddButton } from "./AddButton";
import { Item } from "./Item";

export function TodoList() {
  const ids = useAppStore(
    useShallow((state) => state.todoList.map((todo) => todo.id)),
  );

  return (
    <div>
      <ul>
        {ids.map((id) => (
          <Item key={id} id={id} />
        ))}
      </ul>
      <div>
        <AddButton />
      </div>
    </div>
  );
}
