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
  overflow: hidden;
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
  height: 650px;
  margin: 50px;
  background-color: #ddd;
  padding: 20px;
  border-radius: 8px;
  display: flex;
`;

const ImgBox = styled.div`
  width: 890px;
  height: 100%;
  background-color: pink;
  border-radius: 8px;
`;

const Content = styled.div`
  width: 400px;
  margin: 0 20px;
  font-size: 1.3em;
  button {
    border: none;
    font-size: 1.2em;
    background: none;
    cursor: pointer;
    &:hover {
      font-weight: 700;
    }
  }
`;
