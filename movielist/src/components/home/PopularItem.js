import styled from "styled-components";

export default function PopularItem({ item }) {
  const { title, release_date, poster_path } = item;
  const imgUrl = "https://image.tmdb.org/t/p/w342" + poster_path;
  return (
    <ItemBlock>
      <ImgBox>
        <img src={imgUrl} alt={title} />
      </ImgBox>
      <Title>{title}</Title>
      <ReleaseDate>{release_date}</ReleaseDate>
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  text-align: center;
  width: 342px;
  & + & {
    margin-left: 20px;
  }
`;

const ImgBox = styled.div`
  box-sizing: border-box;
  width: 342px;
  height: auto;
`;

const Title = styled.h4`
  margin: 10px 0 5px;
  font-size: 1.2em;
  font-weight: 700;
`;

const ReleaseDate = styled.span`
  font-size: 0.9em;
  color: gray;
`;
