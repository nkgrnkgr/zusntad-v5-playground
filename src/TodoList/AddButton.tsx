import { useAppStore } from "../store";

export function AddButton() {
  const addTodo = useAppStore((state) => state.addTodo);
  return (
    <button type="button" onClick={() => addTodo()}>
      追加
    </button>
  );
}
