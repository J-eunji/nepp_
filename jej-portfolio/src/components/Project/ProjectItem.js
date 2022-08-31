import styled from "styled-components";

export default function ProjectItem() {
  return (
    <Container>
      <ImgBox>img</ImgBox>
      <Text>text</Text>
    </Container>
  );
}

const Container = styled.div`
  width: 430px;
  height: 550px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 400px;
  height: 260px;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Text = styled.div`
  width: 400px;
  height: 260px;
  background-color: rgba(0, 0, 0, 0.1);
`;
