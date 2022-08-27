import styled from "styled-components";
import TabButton from "./TabButton";

export default function Title({ rank }) {
  const titleList = [
    { id: 0, text: "인기", rank: "popular" },
    { id: 1, text: "최신 예고편", rank: "upComing" },
    { id: 2, text: "트렌딩", rank: "trending" },
  ];
  return (
    <Container>
      <h3>{titleList.find((title) => title.rank === rank).text}</h3>
      <TabButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0 40px;
  margin-top: 20px;
  align-items: center;
  height: 35px;
  h3 {
    font-size: 28px;
    line-height: 28px;
  }
`;
