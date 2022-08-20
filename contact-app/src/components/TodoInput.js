import { useState, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms/todo";

export default function TodoInput() {
  // 업데이트 함수만 리턴하기
  const setTodoList = useSetRecoilState(todoState);

  const [input, setInput] = useState([]);

  const nextId = useRef(1);

  const onCreate = () => {
    setTodoList((todoList) =>
      todoList.concat({ id: nextId.current, text: input, done: false })
    );
    nextId.current++;
    setInput("");
  };

  const onChange = ({ target: { value } }) => {
    setInput(value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} value={input} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
