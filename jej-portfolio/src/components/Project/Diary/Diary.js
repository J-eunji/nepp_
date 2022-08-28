import styled from "styled-components";
import DiaryDetail from "./DiaryDetail";
import DiaryFake from "./DiaryFake";

export default function Diary() {
  return (
    <Container>
      <DiaryFake />
      <DiaryDetail />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
