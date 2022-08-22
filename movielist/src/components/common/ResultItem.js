import { BsPersonFill, BsTvFill, BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ResultItem({ result }) {
  const { media_type } = result;
  if (media_type === "person")
    return (
      <Block>
        <BsPersonFill />
        <p>{result.name}</p>
      </Block>
    );
  if (media_type === "movie")
    return (
      <Link to={`/movie/${result.id}`}>
        <Block>
          <BsFillCameraVideoFill />
          <p>{result.title}</p>
        </Block>
      </Link>
    );
  if (media_type === "tv")
    return (
      <Link to={`/tv/${result.id}`}>
        <Block>
          <BsTvFill />
          <p>{result.name}</p>
        </Block>
      </Link>
    );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.2em;
  p {
    margin-left: 8px;
    flex: 1;
  }
  &:hover {
    background-color: lightgray;
  }
`;
