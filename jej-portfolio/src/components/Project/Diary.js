import { useState } from "react";
import {
  BsFillSunFill,
  BsFillCloudFill,
  BsFillCloudDrizzleFill,
  BsFillCloudSnowFill,
} from "react-icons/bs";
import styled, { css } from "styled-components";

export default function Diary() {
  const [bg, setBg] = useState(true);
  const FadeOut = () => {
    setBg(false);
  };
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  return (
    <Container>
      <Fake bg={bg} />
      <SunIcon bg={bg}>
        <BsFillSunFill onClick={() => FadeOut()} />
      </SunIcon>
      <ContentBox>
        <ImgBox>프로젝트이미지</ImgBox>
        <DescriptionBox>
          <DiaryHeader>
            <TodayDate>{todayStr}</TodayDate>
            <Weather>
              <BsFillCloudFill />
              <BsFillCloudDrizzleFill />
              <BsFillCloudSnowFill />
            </Weather>
          </DiaryHeader>
          <DivideLine />
          <p>프로젝트설명</p>
        </DescriptionBox>
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  margin-top: 100px;
  width: 100vw;
  height: 1000px;
  overflow: hidden;
  position: relative;
`;

const Fake = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #27253d;
  width: 100vw;
  height: 1000px;
  ${({ bg }) =>
    !bg &&
    css`
      display: none;
    `};
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1800px;
  height: 750px;
  margin: 50px;
  border: black 1px solid;
  padding: 20px;
  border-radius: 8px;
  display: flex;
`;

const SunIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: orange;
  cursor: pointer;
  font-size: 300px;
  ${({ bg }) =>
    bg
      ? css`
          &:hover {
            transform: rotate(360deg);
            transition: 10s;
          }
        `
      : css`
          transform: translate(1550px, 90px);
          transition: 0.5s;
          font-size: 50px;
        `};
`;

const ImgBox = styled.div`
  width: 850px;
  height: 710px;
  background-color: #fff;
  border-radius: 8px;
`;

const DescriptionBox = styled.div`
  width: 850px;
  height: 710px;
  background-color: #ddd;
  border-radius: 8px;
`;

const DiaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 850px;
  height: 100px;
  padding: 15px;
`;

const TodayDate = styled.span`
  padding: 10px;
  font-size: 35px;
`;

const Weather = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  font-size: 50px;
`;

const DivideLine = styled.div`
  width: 800px;
  margin: 0 25px;
  border-top: #000 solid 1px;
`;
