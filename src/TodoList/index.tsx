import { useShallow } from "zustand/shallow";
import { useAppStore } from "../store";
import { AddButton } from "./AddButton";
import { Item } from "./Item";
import { SearchKeyword } from "./SearchKeyword";

export function TodoList() {
  const ids = useAppStore(
    useShallow((state) => state.todoList.map((todo) => todo.id)),
  );

  return (
    <div>
      <div
        style={{
          marginLeft: "40px",
        }}
      >
        <SearchKeyword />
      </div>
      <ul>
        {ids.map((id) => (
          <Item key={id} id={id} />
        ))}
      </ul>
      <div
        style={{
          marginLeft: "40px",
        }}
      >
        <AddButton />
      </div>
    </div>
  );
}
