import styled, { css } from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

export default function Slider() {
  const [count, setCount] = useState(0);
  const handleSlide = (count) => {
    setCount(count < 2 ? count + 1 : count);
    console.log(count * 100);
    return count * -100;
  };
  const handleSlidee = () => {
    setCount(count < 2 ? count + 1 : count);
    console.log(count * 100);
    return count * 100;
  };
  return (
    <Container>
      <ImgBox>
        <SlideImg />
        <SlideImg />
        <SlideImg />
      </ImgBox>
      <Button>
        <BsChevronLeft size={50} style={{ cursor: "pointer" }} />
        <BsChevronRight size={50} style={{ cursor: "pointer" }} />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const ImgBox = styled.div`
  display: flex;
  width: 300vw;
  height: 450px;
  overflow: hidden;
  /* ${({ clickLeft }) => css`
    transform: translate(${clickLeft}vw);
  `}
  ${({ clickRight }) => css`
    transform: translate(${clickRight}vw);
  `} */
`;

const SlideImg = styled.div`
  width: 100vw;
  height: 500px;
  overflow: hidden;
  :nth-child(1) {
    background-color: pink;
  }
  :nth-child(2) {
    background-color: lightblue;
  }
  :nth-child(3) {
    background-color: lightgreen;
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
