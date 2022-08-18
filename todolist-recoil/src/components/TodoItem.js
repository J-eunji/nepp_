import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms/todo";

export default function TodoItem({ todo }) {
  const setTodoList = useSetRecoilState(todoState);

  const { id, text } = todo;

  const onToggle = () =>
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );

  const onRemove = () =>
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));

  return (
    <li
      onClick={onToggle}
      style={{
        color: todo.done && "gray",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {text}
      <button onClick={onRemove}>삭제</button>
    </li>
  );
}
