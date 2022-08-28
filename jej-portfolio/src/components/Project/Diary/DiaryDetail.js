import {
  BsFillCloudFill,
  BsFillCloudDrizzleFill,
  BsFillCloudSnowFill,
} from "react-icons/bs";
import styled from "styled-components";

export default function DiaryDetail() {
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  return (
    <Container>
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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 130px 50px 50px 50px;
  width: 1800px;
  height: 750px;
  border: black 1px solid;
  padding: 20px;
  border-radius: 8px;
  display: flex;
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
