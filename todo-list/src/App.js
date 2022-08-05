import TodoBox from "./components/TodoBox";
import TodoHeader from "./components/TodoHeader";
import { createGlobalStyle } from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useRef, useState, useMemo } from "react";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}`;

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "투두리스트 화면 그리기", done: false },
    { id: 2, text: "투두리스트 기능 구현하기", done: false },
  ]);

  // 리스트에 고유id 부여
  const nextId = useRef(3);

  // 할 일 갯수 (useMemo: todoList가 바뀌었을 때만 실행, 성능최적화)
  const count = useMemo(() => {
    return todoList.filter((todo) => !todo.done).length;
  }, [todoList]);

  // 할 일 리스트에 추가
  const onCreate = (text) => {
    // Array.prototype.concat(): 인자로받은 배열을 합쳐 새로운 배열 반환
    setTodoList(todoList.concat({ id: nextId.current, text, done: false }));
    nextId.current++;
  };

  // 할 일 클릭 -> 취소선+회색글씨 (TodoList > TodoItem)
  const onToggle = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  const onRemove = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <GlobalStyle />
      <TodoBox>
        <TodoHeader count={count} />
        <TodoList todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
        <TodoInput onCreate={onCreate} />
      </TodoBox>
    </div>
  );
}

export default App;
