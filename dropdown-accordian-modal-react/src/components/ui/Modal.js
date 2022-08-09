import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import styled, { css, keyframes } from "styled-components";

export default function Modal({ setModal }) {
  const [disappear, setDisappear] = useState(false);
  return (
    <Container disappear={disappear}>
      <Box>
        <BtnClose
          onClick={() => {
            setDisappear(true);
            setTimeout(() => {
              setModal(false);
            }, 300);
          }}
        >
          <AiFillCloseSquare />
        </BtnClose>
      </Box>
    </Container>
  );
}

const fadeOut = keyframes`
to {
  opacity: 0;
}`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.1);
  ${({ disappear }) =>
    disappear &&
    css`
      animation: ${fadeOut};
      animation-duration: 0.4s;
    `}

  position: absolute;
  top: 0;
  left: 0;
  animation-fill-mode: forwards;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 250px;
  background-color: white;
  position: relative;
`;

const BtnClose = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
