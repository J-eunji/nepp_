import styled, { css } from "styled-components";

export default function PopularMovieItem({ popularList }) {
  const ImgUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <Container>
      {popularList.map((popular) => {
        const status = Math.round(popular.popularity / 100);
        return (
          <ItemBox key={popular.id}>
            <Img>
              <img src={ImgUrl + popular.poster_path} alt={popular.title} />
            </Img>
            <Popularity status={status}>
              <Circle />
              <p>{status}</p>
              <span>%</span>
            </Popularity>
            <p>{popular.title}</p>
            <span>{popular.release_date}</span>
          </ItemBox>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const ItemBox = styled.div`
  width: 300px;
  height: 470px;
  display: flex;
  flex-direction: column;
  position: relative;

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

const Popularity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 2;
  outline: 5px solid #000;
  ${({ status }) => css`
    background: conic-gradient(#487, ${status}deg);
  `}
  p {
    color: #fff;
    font-size: 0.9em;
    margin: 0;
  }
  span {
    color: #fff;
    font-size: 5px;
  }
`;

const Circle = styled.div`
  background-color: none;
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  background-color: #000;
  border-radius: 50%;
  z-index: -1;
`;
