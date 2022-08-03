import { useState } from "react";
// react에서 제공하는 함수 Hook (ex. useState, data...)
// import { data } from "../utils/custom_axios"

function InputTitle() {
  const [title, setTitle] = useState("");
  const changeTitle = (e) => setTitle(e.target.value);
  let delText = () => setTitle("");
  return (
    <>
      <h2>{title}</h2>
      <input type="text" onChange={changeTitle} value={title} />
      <button onClick={delText}>삭제</button>
    </>
  );
}

export const NUM = 1; // => 중괄호로 꺼내써야 함 // import {NUM} from 위치
export default InputTitle; // => 그대로 꺼내쓰기
