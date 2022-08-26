import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import styled, { css } from "styled-components";

export default function MainContainer({ maskX, maskY, isClone }) {
  const [maskSize, setMaskSize] = useState(10);
  const bigMouseOver = () => {
    setMaskSize(20);
  };
  const defaultMouseOver = () => {
    setMaskSize(10);
  };
  const imgColor = isClone ? "img/icon.png" : "img/iconb.png";
  const wheelPage = () =>
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });

  return (
    <Container
      isClone={isClone}
      maskX={maskX}
      maskY={maskY}
      maskSize={maskSize}
    >
      <MainBox isClone={isClone}>
        <BorderTopLeft isClone={isClone} />
        <BorderTopRight isClone={isClone} />
        <h2>FRONT-END PORTFOLIO</h2>
        <ContentBox>
          <Name>JUNG EUNJI</Name>
          <Content
            className="introduce"
            onMouseOver={() => bigMouseOver()}
            onMouseLeave={() => defaultMouseOver()}
          >
            <Introduce>
              <p>안녕하세요. 소통과 배움에 자신있는</p>
              <p>프론트엔드 웹 개발 지원자 정은지입니다.</p>
            </Introduce>
            <SkillBox>
              <p># SKILL</p>
              <img src={imgColor} alt="skill" />
            </SkillBox>
          </Content>
        </ContentBox>
      </MainBox>
      <ScrollBtn onClick={() => wheelPage()} isClone={isClone}>
        <p>PROJECT</p>
        <BsChevronDoubleDown />
      </ScrollBtn>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transition: clip-path 0.1s;
  background-color: lightgray;
  ${({ isClone, maskX, maskY, maskSize }) =>
    isClone &&
    css`
      background-color: lightblue;
      clip-path: circle(${maskSize}% at ${maskX}px ${maskY}px);
    `}
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
  color: #000;
  border: #000 3px solid;
  border-top: none;
  margin: 100px 0;
  position: relative;
  h2 {
    position: absolute;
    top: -33px;
    font-size: 2.7em;
  }
  ${({ isClone }) =>
    isClone &&
    css`
      color: #fff;
      border: #fff 3px solid;
      border-top: none;
    `}
`;

const Name = styled.h1`
  font-size: 3.5em;
  padding-top: 20px;
`;

const BorderTopLeft = styled.div`
  border: #000 3px solid;
  border-top: none;
  width: 150px;
  position: absolute;
  top: -3px;
  left: -3px;
  ${({ isClone }) =>
    isClone &&
    css`
      border: #fff 3px solid;
      border-top: none;
    `}
`;
const BorderTopRight = styled.div`
  border: #000 3px solid;
  border-top: none;
  width: 150px;
  position: absolute;
  top: -3px;
  right: -3px;
  ${({ isClone }) =>
    isClone &&
    css`
      border: #fff 3px solid;
      border-top: none;
    `}
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
`;

const Content = styled.div`
  padding: 10px 0;
`;

const Introduce = styled.div`
  p {
    font-size: 1.3em;
    margin-top: 10px;
  }
`;

const SkillBox = styled.div`
  width: 350px;
  margin: 30px 0;
  font-size: 1.5em;
  font-weight: 700;
  img {
    width: 350px;
  }
`;

const ScrollBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  width: 200px;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
  ${({ isClone }) =>
    isClone &&
    css`
      color: #fff;
    `}
`;
