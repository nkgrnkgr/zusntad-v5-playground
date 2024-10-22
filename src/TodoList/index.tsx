import { AddButton } from "./AddButton";
import { Item } from "./Item";
import { SearchKeyword } from "./SearchKeyword";

export function TodoList() {
  // TODO state.todoList　の中から name に searchKeyword が含まれるものだけ表示する Selector を作成してください
  // [参考]
  // - https://kakehashi-dev.hatenablog.com/entry/2024/10/20/185225
  // - https://github.com/reduxjs/reselect
  const ids = ["1"];

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
