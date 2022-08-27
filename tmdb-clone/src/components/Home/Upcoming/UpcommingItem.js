import styled from "styled-components";

export default function UpcommingItem({
  videoUrl,
  title,
  backdrop_path,
  overview,
}) {
  const ImgUrl = "https://image.tmdb.org/t/p/w1280/";
  console.log(title);
  return (
    <ItemBox>
      <Img>
        <img src={ImgUrl + backdrop_path} alt={title} />
      </Img>
      <p>{title}</p>
    </ItemBox>
  );
}

const ItemBox = styled.div`
  width: 600px;
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
    width: 550px;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
