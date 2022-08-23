import styled from "styled-components";

export default function Info() {
  return (
    <Container>
      <Box>
        <Hashtag>
          <h5>#KEYWORD</h5>
          <p>소통, 배움</p>
        </Hashtag>
        <Hashtag>
          <h5>#FAVORITE</h5>
          <p>반려견, 미술</p>
        </Hashtag>
      </Box>
      <DivideLine />
      <Box>
        <h5>#SKILL</h5>
        <ImgBox>
          <img src="img/icon.png" alt="skill" />
        </ImgBox>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: gray;
  flex: 0.5;
  padding: 60px 50px;
`;

const Box = styled.div`
  h5 {
    font-size: 2em;
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    font-size: 1.8em;
    :nth-child(1) {
      margin-bottom: 30px;
    }
  }
`;

const Hashtag = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 40px;
  }
`;

const DivideLine = styled.div`
  background-color: black;
  width: 1px;
  height: auto;
  margin: 0 70px;
`;

const ImgBox = styled.div`
  width: 700px;
  margin-top: 20px;
  img {
    width: 700px;
  }
`;
