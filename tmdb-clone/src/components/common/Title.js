import styled from "styled-components";
import TabButton from "./TabButton";

export default function Title() {
  const titleList = [
    { id: 0, text: "인기" },
    { id: 1, text: "최신 예고편" },
    { id: 2, text: "트렌딩" },
  ];

  return (
    <Container>
      <h3>인기</h3>
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
