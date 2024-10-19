import { useAppStore } from "../store";

type Props = {
  id: string;
};

export function Item({ id }: Props) {
  const item = useAppStore((state) =>
    state.todoList.find((todo) => todo.id === id),
  );
  const toggleStatus = useAppStore((state) => state.toggleStatus);

  if (item === undefined) {
    return null;
  }

  return (
    <li style={{ display: "flex", gap: "10px" }}>
      <div>
        <button
          style={{
            background: "none",
            border: "none",
            padding: "2px",
          }}
          type="button"
          onClick={() => toggleStatus(item.id)}
        >
          {item.done ? "✅" : "☑️"}
        </button>
      </div>
      <div
        style={{
          textDecoration: item.done ? "line-through" : "none",
        }}
      >
        {item.name}
      </div>
    </li>
  );
}
