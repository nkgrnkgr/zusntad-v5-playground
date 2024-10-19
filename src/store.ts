import { create } from "zustand";

type Todo = {
  id: string;
  name: string;
  done: boolean;
};

type AppStore = {
  todoList: Todo[];
  toggleStatus: (id: string) => void;
  addTodo: (todo?: Todo) => void;
};

const getRandId = () => Math.random().toString(36).substring(7);

export const useAppStore = create<AppStore>((set) => ({
  todoList: [],
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
