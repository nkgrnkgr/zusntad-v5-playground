import { create } from "zustand";

type Todo = {
  id: string;
  name: string;
  done: boolean;
};

export type AppStore = {
  todoList: Todo[];
  toggleStatus: (id: string) => void;
  addTodo: (todo?: Todo) => void;
  searchText: string;
  updateSearchText: (text: string) => void;
};

const getRandId = () => Math.random().toString(36).substring(7);

export const useAppStore = create<AppStore>((set) => ({
  searchText: "",
  updateSearchText: (text) => set({ searchText: text }),
  todoList: [
    {
      id: getRandId(),
      name: "Todo 1",
      done: false,
    },
    {
      id: getRandId(),
      name: "Todo 2",
      done: true,
    },
    {
      id: getRandId(),
      name: "Todo 3",
      done: false,
    },
    {
      id: getRandId(),
      name: "Todo 4",
      done: true,
    },
    {
      id: getRandId(),
      name: "Todo 5",
      done: false,
    },
    {
      id: getRandId(),
      name: "Todo 6",
      done: true,
    },
    {
      id: getRandId(),
      name: "Todo 7",
      done: false,
    },
    {
      id: getRandId(),
      name: "Todo 8",
      done: true,
    },
    {
      id: getRandId(),
      name: "Todo 9",
      done: false,
    },
    {
      id: getRandId(),
      name: "Todo 10",
      done: true,
    },
  ],
  addTodo: (todo) =>
    set((state) => ({
      todoList: [
        ...state.todoList,
        todo ?? {
          id: getRandId(),
          name: `Todo ${state.todoList.length + 1}`,
          done: false,
        },
      ],
    })),
  toggleStatus: (id) =>
    set((state) => {
      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              done: !todo.done,
            };
          }
          return todo;
        }),
      };
    }),
}));
