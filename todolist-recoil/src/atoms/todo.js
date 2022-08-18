import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});

// 상태값이 변하면 이 부분도 계속 알아서 업데이트, 실행됨
// get 함수를 통해 atom 값을 참조해 새로운 값 반환
export const undoneCount = selector({
  key: "undoneState",
  get: ({ get }) => {
    const todoList = get(todoState);

    const undoneTodoList = todoList.filter((todo) => !todo.done);

    return undoneTodoList.length;
  },
});
