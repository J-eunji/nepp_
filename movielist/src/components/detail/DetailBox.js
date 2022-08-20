import styled from "styled-components";

export default function DetailBox() {
  return (
    <Block>
      <ImgBox>이미지</ImgBox>
      <ContentBox>
        <TitleBox>
          <h3>네</h3>
          <span>(2022)</span>
        </TitleBox>
        <DescText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellat
          nulla rem laudantium est laboriosam ea quaerat, nam repudiandae velit
          error ipsa excepturi ad reprehenderit facilis unde, iste explicabo
          asperiores dolores consequatur. Nisi hic itaque nam sed ullam facere,
          aliquam nesciunt necessitatibus, esse magnam voluptas id error
          accusamus mollitia omnis!
        </DescText>
      </ContentBox>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  background: #ddd;
`;

const ImgBox = styled.div`
  flex-shrink: 0;
  width: 350px;
  height: 500px;
  background-color: tomato;
  margin-right: 20px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  h3 {
    font-size: 2em;
    font-weight: 700;
  }
  span {
    font-size: 1.8em;
  }
`;

const ContentBox = styled.div``;

const DescText = styled.p`
  line-height: 1.1em;
  font-size: 1.1em;
`;

const Summary = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: 700;
`;
