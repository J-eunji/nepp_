import { useState } from "react";
import styled from "styled-components";

export default function WordInput({ onCreate }) {
  const [inputs, setInputs] = useState({
    eng: "",
    kor: "",
  });

  // 이 부분 문법 자주 쓰임!!!!
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
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
      />
      <input
        type="text"
        placeholder="뜻을 입력해주세요."
        name="kor"
        onChange={onChange}
        value={inputs.kor}
      />
      <button
        onClick={() => {
          onCreate(inputs.eng, inputs.kor.split(","));
          setInputs({
            eng: "",
            kor: "",
          });
          console.log(inputs);
        }}
      >
        등록
      </button>
    </InputBlock>
  );
}

const InputBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
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
