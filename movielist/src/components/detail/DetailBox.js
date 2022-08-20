import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled, { css } from "styled-components";
import { getDetails } from "../../custom-axios";
import Loading from "../common/Loading";

// /movie/:id => /movie/123 -> 123이 parameter
//  => useParams() => {name : 123}
// /movie?name= ?뒤는 query라고 함
// useParams로 URL의 Parameter를 불러오기

export default function DetailBox() {
  // 숫자 넣어도 string 으로 넘겨줌
  // 현제 페이지에서 사용하고 있는 url 파라미터값
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { pathname } = useLocation();

  // ?. (옵셔널 체이닝) : ?.앞에 값이 undefined와 null이 아닐 경우만 참조
  // console.log({}.date?age);

  const {
    title,
    name,
    release_date,
    first_air_date,
    overview,
    poster_path,
    backdrop_path,
  } = data;

  const imgUrl = `https://image.tmdb.org/t/p/w342${poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;

  // 처음 mount 될 때 한 번만 불러옴
  // async함수에서 return 하면 resolve 하는 promise 자체가 반환된다.
  // promise 자체를 반환하기 때문에 사용하는 곳도
  // async, await로 받아주고 변수를 선언해야
  // promise 자체가 아닌 resolve 값 자체가 넘어온다.
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetails(pathname);
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [pathname]);

  if (isLoading) return <Loading />;

  return (
    <Block backdropUrl={backdropUrl} isLoading={isLoading}>
      <Backdrop />
      <ImgBox>
        <img src={imgUrl} alt={title || name} />
      </ImgBox>
      <ContentBox>
        <TitleBox>
          <h3>{title || name}</h3>
          <span>
            ({release_date?.substr(0, 4) || first_air_date?.substr(0, 4)})
          </span>
        </TitleBox>
        <Summary
          style={{ marginBottom: 10, fonsSize: "1.2em", fontWeight: 700 }}
        >
          개요
        </Summary>
        <DescText>{overview || "개요 없음"}</DescText>
      </ContentBox>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  background: #ddd;

  box-sizing: border-box;

  ${({ backdropUrl }) => css`
    background-image: url(${backdropUrl});
  `}
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

// 포토샵 레이어 - 어저스트 레이어?
const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  // 블러 처리
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 300px;
  height: 450px;
  overflow: hidden;
  margin-right: 20px;
  img {
    height: 100%;
  }
  z-index: 100;
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

const ContentBox = styled.div`
  z-index: 100;
  color: #fff;
`;

const DescText = styled.p`
  line-height: 1.5em;
  font-size: 1.1em;
`;

const Summary = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: 700;
`;
