import { type AppStore, useAppStore } from "../store";
import { AddButton } from "./AddButton";
import { Item } from "./Item";
import { SearchKeyword } from "./SearchKeyword";

// TODO state.todoList　の中から name に searchKeyword が含まれるものだけ表示する Selector を作成してください
// なお searchKeyword が空文字の場合は全ての todo を表示するものとします
// [参考]
// - https://kakehashi-dev.hatenablog.com/entry/2024/10/25/100000
// - https://github.com/reduxjs/reselect
const selectFilteredTodoListIds = (state: AppStore) => {};

export function TodoList() {
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
