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
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ddd;
  width: 100vw;
  height: 480px;
  z-index: -1;
`;

const Box = styled.div`
  margin-top: 100px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-left: 30px;
    font-size: 4em;
  }
`;
