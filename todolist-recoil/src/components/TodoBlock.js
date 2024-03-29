import { useRecoilValue } from "recoil";
import { todoState } from "../atoms/todo";
import TodoItem from "./TodoItem";

export default function TodoBlock() {
  const todoList = useRecoilValue(todoState);

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
