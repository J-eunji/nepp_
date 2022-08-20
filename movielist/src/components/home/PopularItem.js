import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PopularItem({ item }) {
  const { id, title, release_date, poster_path, name, first_air_date } = item;
  const imgUrl = "https://image.tmdb.org/t/p/w342" + poster_path;
  return (
    <ItemBlock>
      <Link to={`/${title ? "movie" : "tv"}/${id}`}>
        <ImgBox>
          <img src={imgUrl} alt={title || name} />
        </ImgBox>
        <Title>{title || name}</Title>
        <ReleaseDate>{release_date || first_air_date}</ReleaseDate>
      </Link>
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
  overflow: hidden;
  img {
    height: 100%;
  }
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
