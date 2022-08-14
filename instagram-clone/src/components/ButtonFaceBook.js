import styled from "styled-components";

export default function ButtonFacebook() {
  return (
    <BtnBox>
      <Btn>
        <ImgBox />
        Log in with Facebook
      </Btn>
    </BtnBox>
  );
}

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  color: #385185;
  background: none;
  border: none;
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 16px;
  height: 16px;
  background: url(${require("../assets/image/sprite.png")});
  background-position: -414px -259px;
  margin-right: 10px;
`;
