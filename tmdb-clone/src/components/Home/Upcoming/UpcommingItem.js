import styled from "styled-components";

export default function UpcommingItem({ video, movie }) {
  const movieList = movie.filter((obj) => obj.backdrop_path !== null);
  console.log(movieList);
  const { title, release_date, backdrop_path } = movieList;
  const ImgUrl = "https://image.tmdb.org/t/p/w1280/";
  return (
    <ItemBox>
      <Img>
        <img src={ImgUrl + backdrop_path} alt={title} />
      </Img>
      <p>{title}</p>
      <span>{release_date}</span>
    </ItemBox>
  );
}

const ItemBox = styled.div`
  width: 300px;
  height: 470px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: black 1px solid;

  & + & {
    margin-left: 20px;
  }
  p {
    font-size: 1.2em;
    margin: 5px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  span {
    font-size: 1em;
    color: gray;
  }
`;

const Img = styled.div`
  img {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
