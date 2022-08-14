import styled from "styled-components";
import Input from "./Input";
import { lighten } from "polished";
import Button from "./Button";
import { useState } from "react";
import DivideLine from "./DivideLine";
import ButtonFacebook from "./ButtonFaceBook";

export default function InputForm() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [hide, setHide] = useState(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { username, password } = inputs;
  const activeBtn = username.length >= 1 && password.length >= 6;

  return (
    <form>
      <FormBlock>
        <Input
          type="text"
          placeholder="Phone number, username, or email"
          onChange={handleInput}
          name="username"
          length={username.length}
        />
        <Input
          type={hide ? "password" : "text"}
          placeholder="Password"
          rightContent={
            <BtnDisplay onClick={() => setHide(!hide)}>
              {hide ? "Show" : "Hide"}
            </BtnDisplay>
          }
          onChange={handleInput}
          name="password"
          length={password.length}
        />
        <Button text="Login" active={activeBtn} />
        <DivideLine text="or" />
        <ButtonFacebook />
      </FormBlock>
    </form>
  );
}

const FormBlock = styled.div`
  padding: 0 40px 50px;
`;

const BtnDisplay = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin-right: 5px;
  color: rgb(38, 38, 38);
  &:active {
    color: ${lighten(0.2, "rgb(38,38,38)")};
  }
`;
