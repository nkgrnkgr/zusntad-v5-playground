import { createSelector } from "reselect";
import { type AppStore, useAppStore } from "../store";
import { AddButton } from "./AddButton";
import { Item } from "./Item";
import { SearchKeyword } from "./SearchKeyword";

// TODO state.todoList　の中から name に searchKeyword が含まれるものだけ表示する Selector を作成してください
// なお searchKeyword が空文字の場合は全ての todo を表示するものとします
// [参考]
// - https://kakehashi-dev.hatenablog.com/entry/2024/10/20/185225
// - https://github.com/reduxjs/reselect
const selectFilteredTodoListIds = createSelector(
  [(state: AppStore) => state.todoList, (state: AppStore) => state.searchText],
  (todoList, searchText) => {
    if (searchText === "") {
      return todoList.map((todo) => todo.id);
    }

    return todoList
      .filter((todo) => todo.name.includes(searchText))
      .map((todo) => todo.id);
  },
);

export function TodoList() {
  const ids = useAppStore(selectFilteredTodoListIds);

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
