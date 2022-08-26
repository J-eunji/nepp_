import { useEffect, useRef, useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import styled, { css } from "styled-components";

export default function Movie() {
  const scrollRef = useRef();
  const [move, setMove] = useState(0);
  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", () => {
      const scroll =
        ((scrollRef.current.getBoundingClientRect().top - 1000) * -1) / 2;
      if (scroll > 0) setMove(scroll); //innerheight
    });
  }, []);

  return (
    <Container ref={scrollRef}>
      <Loading move={move}>
        <RiMovie2Fill size={80} />
      </Loading>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Loading = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0px;
  ${({ move }) => css`
    transform: translateX(${move}px);
  `}
`;
