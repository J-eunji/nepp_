import { useState, useRef } from "react";
// react에서 제공하는 함수 Hook (ex. useState, data...)
// import { data } from "../utils/custom_axios"

function InputTitleCopy() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    age: 0,
  });

  const inputRef = useRef();

  let { name, nickname, age } = inputs;

  function onChange(e) {
    console.log(e);
    setInputs({
      // 스프레드를 통해 기존 inputs의 프로퍼티를 나열한 뒤
      // 특정 프로퍼티만 업데이트
      ...inputs,
      // 동적 프로퍼티 접근 : [] 안에 문자열로 키 값 지정하여 접근
      // e는 event 자체, 많은 것이 담겨있음
      // target은 input
      // name은 input 안에 있는 name
      [e.target.name]: e.target.value,
    });
  }

  function delName() {
    setInputs({
      name: "",
      nickname: "",
      age: 0,
    });
    inputRef.current.focus(); // 커서를 inputRef 넣은 곳에
  }

  return (
    <>
      {/* 이벤트 바인딩 : 특정 이벤트가 발생했을 떄 실행할 콜백함수 묶기 */}
      <div>
        <input
          type="text"
          onChange={onChange}
          name="name"
          value={name}
          ref={inputRef}
        />
        <input
          type="text"
          onChange={onChange}
          name="nickname"
          value={nickname}
        />
        <input type="text" onChange={onChange} name="age" value={age} />
      </div>
      <div>
        {name}({nickname}) : {age}
      </div>
      <div>
        <button onClick={delName}>삭제</button>
      </div>
    </>
  );
}

export const NUM = 1; // => 중괄호로 꺼내써야 함 // import {NUM} from 위치
export default InputTitleCopy; // => 그대로 꺼내쓰기
