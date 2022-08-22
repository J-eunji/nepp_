import { useState } from "react";
import styled from "styled-components";
import { getPopular } from "../../dataApi";

export default function PopularItem() {
  const [popular, setPopular] = useState([]);
  const getData = async () => {
    let { data } = await getPopular();
    setPopular(data);
  };
  getData();
  console.log(popular);
  return (
    <ContentList>
      <ImgBox>
        <Img />
        <p>제목</p>
        <span>개봉일</span>
      </ImgBox>
    </ContentList>
  );
}

const ContentList = styled.div`
  display: flex;
  width: 100vw;
  height: 540px;
  margin: 20px 0;
  padding: 20px;
  border: black 1px solid;
  overflow-x: scroll;
`;

const ImgBox = styled.div`
  width: 300px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & + & {
    margin-left: 20px;
  }
  p {
    font-size: 1.5em;
    margin: 10px;
  }
  span {
    font-size: 1.2em;
    color: gray;
  }
`;

const Img = styled.div`
  width: 300px;
  height: 400px;
  background-color: lightcoral;
`;
