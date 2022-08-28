import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

export default function UpcommingItem({ upComing }) {
  const ImgUrl = "https://image.tmdb.org/t/p/w1280/";
  const { title, backdrop_path, overview } = upComing;
  return (
    <Container>
      <ItemBox>
        <Img>
          <img src={ImgUrl + backdrop_path} alt={title} />
          <PlayBtn>
            <FaPlay size={60} />
          </PlayBtn>
        </Img>
        <Text>
          <p>{title}</p>
          <span>{overview}</span>
        </Text>
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  & + & {
    margin-left: 20px;
  }
`;

const ItemBox = styled.div`
  width: 550px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: black 1px solid;
  overflow: hidden;
  p {
    font-size: 1.2em;
    margin: 5px 0;
  }
`;

const Img = styled.div`
  position: relative;
  width: 500px;
  height: 280px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
  img {
    width: 500px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: 0.4s;
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
    div {
      transform: scale(1.05);
    }
  }
`;

const PlayBtn = styled.div`
  position: absolute;
  top: 130px;
  left: 220px;
  color: #fff;
`;

const Text = styled.div`
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 30px;
  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1em;
    color: gray;
  }
`;
