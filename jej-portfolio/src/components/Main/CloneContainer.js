import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import styled from "styled-components";
import mainImg from "../../assets/imgs/mainImg.png";
import { indexState } from "../atoms/index";
import { useRecoilState } from "recoil";

export default function CloneContainer() {
  const [index, setIndex] = useRecoilState(indexState);
  const [mask, setMask] = useState({ x: 0, y: 0 });
  const [maskSize, setMaskSize] = useState(10);

  const onClickIcon = (id) => {
    setIndex(id);
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  };

  const handleMask = (e) => {
    setMask({ x: e.clientX, y: e.clientY });
  };

  const { x, y } = mask;

  const bigMouseEnter = () => {
    setMaskSize(20);
  };
  const defaultMouseOver = () => {
    setMaskSize(10);
  };

  return (
    <Section onMouseMove={(e) => handleMask(e)}>
      <Container maskSize={maskSize} x={x} y={y}>
        <MainBox>
          <ContentBox
            onMouseEnter={() => bigMouseEnter()}
            onMouseLeave={() => defaultMouseOver()}
          >
            <h2>FRONT-END PORTFOLIO</h2>
            <Name>JUNG EUNJI</Name>
          </ContentBox>
        </MainBox>
        <ScrollBtn onClick={() => onClickIcon(1)}>
          <BsChevronDoubleDown />
        </ScrollBtn>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.div.attrs(({ maskSize, x, y }) => ({
  style: {
    clipPath: `circle(${maskSize}% at ${x}px ${y}px)`,
  },
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${mainImg});
  background-repeat: no-repeat;
  background-size: cover;
  transition: clip-path 0.1s;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 400px;
  color: #fff;
  margin-top: 130px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 500px;
  h2 {
    font-size: 2.7em;
  }
`;

const Name = styled.h1`
  font-size: 3.5em;
  margin-top: 20px;
`;

const ScrollBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  margin-top: 100px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: #fff;
  &:hover {
    transform: translateY(5px);
    transition: 0.1s;
  }
`;
