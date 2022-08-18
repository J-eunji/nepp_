import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo, removeTodo, toggleTodo } from "../reducer/todo";

export default function Todo() {
  // store에서 가져온 최신 상태값이 state에 담김
  const todoList = useSelector((state) => state.todo);

  // store의 dispatch 함수를 받아옴.
  const dispatch = useDispatch();

  const nextId = useRef(2);

  const [input, setInput] = useState("");

  const onCreate = (id, text) => {
    dispatch(createTodo(id, text));
    nextId.current++;
  };
  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => onCreate(nextId.current, input)} />
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{ color: todo.done && "#ddd" }}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
            <button
              onClick={(e) => {
                // 버블링 방지 (preventdefault는 기본이벤트 모두 방지)
                e.stopPropagation();
                onRemove(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
