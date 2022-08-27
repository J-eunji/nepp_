import { useEffect, useRef, useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import { RiMovie2Fill } from "react-icons/ri";
import styled, { css, keyframes } from "styled-components";

export default function Movie() {
  const scrollRef = useRef();

  const [index, setIndex] = useState(0);

  const [move, setMove] = useState(false);

  const [btn, setBtn] = useState([
    {
      id: 1,
      name: <RiMovie2Fill size={80} className="movieIcon" />,
      active: true,
    },
  ]);

  const btnList = [
    {
      id: 1,
      name: <RiMovie2Fill size={80} className="movieIcon" />,
      active: true,
    },
    { id: 2, name: <SiThemoviedatabase size={80} />, active: false },
  ];

  const OverBtn = () => {
    setBtn(btnList.filter((btn) => !btn.active));
  };
  const LeaveBtn = () => {
    setBtn(btnList.filter((btn) => btn.active));
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", () => {
      const scroll = scrollRef.current.getBoundingClientRect().top;
      if (scroll < window.innerHeight / 2) {
        setMove(true);
      } else {
        setMove(false);
      }
    });
  }, []);

  const handlePage = () => {
    setIndex(1);
  };

  return (
    <Container ref={scrollRef} index={index}>
      <Loading move={move}>
        <div
          onMouseOver={() => OverBtn()}
          onMouseLeave={() => LeaveBtn()}
          onClick={() => handlePage()}
        >
          {btn[0]?.name}
        </div>
      </Loading>
      <Detail></Detail>
    </Container>
  );
}
const Container = styled.div`
  background-color: aliceblue;
  display: flex;
  padding-top: 120px;
  width: 200vw;
  height: 100vh;
  overflow: hidden;
  ${({ index }) => css`
    transform: translate(${index * -100}vw);'
    transition-duration: 0.2s;
  `}
`;

const moving = keyframes`
  to {
      transform: translateX(900px);
    }
`;

const rolling = keyframes`
  to {
      transform: rotate(1080deg);
    }
`;

const Loading = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  div {
    position: absolute;
    top: 350px;
    left: 0px;
    width: 67px;
    height: 67px;
    transform-origin: 0% 0%;
    cursor: pointer;
    ${({ move }) =>
      move > 0 &&
      css`
        animation: ${moving} 3s;
        animation-fill-mode: forwards;
      `}
    .movieIcon {
      ${({ move }) =>
        move &&
        css`
          animation: ${rolling} 3s;
        `}
    }
  }
`;

const Detail = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;
