import { useState } from "react";
import styled from "styled-components";
import Input from "./common/Input";
import Button from "./Button";

export default function Form() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(true);
  const btnName = show ? "Show" : "Hide";
  const { username, password } = inputs;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormBlock>
        <Input
          placeholder="username, phone or email"
          onChange={handleInput}
          name="username"
          value="password"
        />
        {/* passwordShow 프로퍼티에 type 이름 받아서 Input.js에 전달
        show의 boolean값에 따라 input type이 password일지, text일지 정해줌*/}
        {/* rightContent 프로퍼티에 button을 받아서 Input.js에 전달 
        버튼 이름이 show의 boolean값에 따라 Hide, Show로 바뀜*/}
        <Input
          passwordShow={show ? "password" : "text"}
          rightContent={
            <BtnDisplay onClick={() => setShow(!show)}>{btnName}</BtnDisplay>
          }
        />
        <Button text="LogIn" />
      </FormBlock>
    </form>
  );
}

const FormBlock = styled.div`
  padding: 40px;
`;

const BtnDisplay = styled.button`
  border: none;
  background: none;
  font-weight: 700;
`;
