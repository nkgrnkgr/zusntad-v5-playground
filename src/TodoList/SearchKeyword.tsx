import { useAppStore } from "../store";

export function SearchKeyword() {
  const [searchText, updateSearchText] = useAppStore((state) => [
    state.searchText,
    state.updateSearchText,
  ]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={(e) => updateSearchText(e.target.value)}
    />
  );
}
