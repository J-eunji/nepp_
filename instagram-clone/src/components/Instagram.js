import styled from "styled-components";
import { bg_color, border_color } from "../color";
import InputForm from "./InputForm";

export default function Instagram() {
  return (
    <Template>
      <Block>
        <Logo>
          <img src={require("../assets/image/instagram_logo.png")} alt="" />
        </Logo>
        <InputForm />
      </Block>
    </Template>
  );
}

const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${bg_color};
`;

const Block = styled.div`
  width: 350px;
  border: 1px solid ${border_color};
  background-color: #fff;
`;

const Logo = styled.h1`
  text-align: center;
  margin: 50px 0 40px;
`;
