import styled, { css, keyframes } from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

export default function Slider() {
  const [slideList, setSlideList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const handleLeft = () => {
    if (index > 0) {
      setFade(true);
      setIndex(index - 1);
    }
  };

  const handleRight = () => {
    if (index < slideList.length - 1) {
      setFade(true);
      setIndex(index + 1);
    }
  };

  return (
    <Container>
      <ImgBox length={slideList.length} index={index} fade={fade}>
        {slideList.map((slide) => (
          <SlideImg key={slide.id}>
            <p>{slide.id}</p>
          </SlideImg>
        ))}
      </ImgBox>
      <Button>
        <BsChevronLeft
          size={50}
          cursor="pointer"
          onClick={() => handleLeft()}
        />
        <BsChevronRight
          size={50}
          cursor="pointer"
          onClick={() => handleRight()}
        />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImgBox = styled.ul`
  display: flex;
  height: 450px;
  ${({ length, index }) => css`
    width: ${length * 100}vw;
    transform: translate(${index * -100}vw);
  `}
  ${({ fade }) =>
    fade &&
    css`
      animation: ${fadeIn} 0.5s;
    `}
`;

const SlideImg = styled.li`
  width: 100vw;
  position: relative;
  :nth-child(1) {
    background-color: pink;
  }
  :nth-child(2) {
    background-color: lightblue;
  }
  :nth-child(3) {
    background-color: lightgreen;
  }
  p {
    position: absolute;
    bottom: 20px;
    left: 50px;
    color: white;
    font-size: 3em;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  padding: 0 35px 0 20px;
  width: 100vw;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
`;
