import styled from "styled-components";

export default function Project() {
  return (
    <Container>
      <Title>
        <p>PROJECT #1</p>
        <p>프로젝트 제목</p>
      </Title>
      <ContentBox>
        <ImgBox />
        <Content>
          <p>설명설명설명</p>
          <button>상세 내용(노션) Click</button>
          <p>사용언어</p>
        </Content>
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  height: 100vh;
`;

const Title = styled.div`
  text-align: center;
  p {
    :nth-child(1) {
      font-size: 2em;
    }
    :nth-child(2) {
      font-size: 3em;
    }
  }
`;

const ContentBox = styled.div`
  margin: 50px;
  background-color: #ddd;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  width: 390px;
  height: 450px;
  background-color: pink;
  border-radius: 8px;
`;

const Content = styled.div`
  width: 400px;
  font-size: 1.1em;
`;
