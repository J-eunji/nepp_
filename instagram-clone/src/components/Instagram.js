import styled from "styled-components";
import { bg_color, border_color } from "../color";
import Form from "./Form";

export default function Instagram() {
  return (
    <Template>
      <Block>
        <Logo>
          <img src={require("../assets/image/instagram_logo.png")} />
        </Logo>
        <Form />
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
  height: 500px;
  border: ${border_color};
  background-color: white;
`;

const Logo = styled.h1`
  text-align: center;
  margin: 50px 40px;
`;
