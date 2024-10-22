import { useAppStore } from "../store";

export function SearchKeyword() {
  const searchText = useAppStore((state) => state.searchText);
  const updateSearchText = useAppStore((state) => state.updateSearchText);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={(e) => updateSearchText(e.target.value)}
    />
  );
}
