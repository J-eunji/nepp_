import styled from "styled-components";

export default function Introduce() {
  return (
    <Container>
      <Box>
        <p>프론트엔드 웹 개발 지원자</p>
        <p>'정은지' 입니다.</p>
      </Box>
    </Container>
  );
}
const Container = styled.div`
  background-color: #ddd;
  width: 100vw;
  flex: 1;
  z-index: -1;
`;
const Box = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  p {
    margin-left: 50px;
    font-size: 4em;
  }
`;
