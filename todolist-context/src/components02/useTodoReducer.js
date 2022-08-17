import { useReducer, useRef } from "react";

const initialState = {
  input: "",
  todoList: [
    {
      id: 1,
      text: "클릭하면 할 일 완료!",
      done: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "change":
      // return 값: 다음 state 값이 된다.
      return {
        ...state,
        input: action.input,
      };
    case "create":
      return {
        ...state,
        input: "",
        // concat은 기존데이터를 건드리지 않는다.
        todoList: state.todoList.concat({
          id: action.id,
          text: state.input,
          done: false,
        }),
      };
    case "toggle":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "remove":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    default:
      return {
        state,
      };
  }
}

export default function useTodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { input } = state;
  const onChange = (e) => {
    dispatch({ type: "change", input: e.target.value });
  };

  const nextId = useRef(2);

  const onCreate = () => {
    if (input.trim() === "") return;
    dispatch({ type: "create", id: nextId.current });
    nextId.current++;
  };

  const onToggle = (id) => {
    dispatch({ type: "toggle", id });
  };

  const onRemove = (id) => {
    dispatch({ type: "remove", id });
  };

  return { state, onCreate, onChange, onRemove, onToggle };
}
