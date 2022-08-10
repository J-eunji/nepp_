import { useState, useRef } from "react";
import styled from "styled-components";

export default function WordInput({ onCreate }) {
  const [inputs, setInputs] = useState({
    eng: "",
    kor: "",
  });

  const engInput = useRef();

  // 이 부분 문법 자주 쓰임!!!!
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const add = () => {
    if (inputs.eng !== "" && inputs.kor !== "") {
      onCreate(inputs.eng, inputs.kor.split(","));
    } else {
      alert("빈 칸이 있습니다.");
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    engInput.current.focus();
    add();
    setInputs({
      eng: "",
      kor: "",
    });
  };

  return (
    <InputBlock>
      <input
        type="text"
        placeholder="영단어를 입력해주세요."
        name="eng"
        onChange={onChange}
        value={inputs.eng}
        autoComplete="off"
        ref={engInput}
      />
      <input
        type="text"
        placeholder="뜻을 입력해주세요."
        name="kor"
        onChange={onChange}
        value={inputs.kor}
        autoComplete="off"
      />
      <button onClick={onClick}>등록</button>
    </InputBlock>
  );
}

const InputBlock = styled.form`
  padding: 10px 20px;
  input {
    width: 100%;
    padding: 10px 5px;
    outline: none;
    border: 1px solid #ddd;
    &:nth-child(2) {
      margin-top: 10px;
    }
  }
  button {
    width: 100%;
    background: none;
    padding: 10px 0;
    margin-top: 10px;
    border: 1px solid #ddd;
  }
`;
