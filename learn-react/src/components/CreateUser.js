import React, { useRef, useState } from "react";
// 등록
function CreateUser({ onCreat01 }) {
  // input 태그 값 관리하는 함수 만들기
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email } = inputs;
  const cursor = useRef();

  const resetInputs = () => {
    setInputs({
      name: "",
      email: "",
    });
    cursor.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={onChange}
        value={name}
        ref={cursor}
      />
      <input type="email" name="email" onChange={onChange} value={email} />
      <button
        onClick={() => {
          onCreat01(name, email);
          resetInputs();
        }}
      >
        등록
      </button>
    </div>
  );
}
export default CreateUser;
