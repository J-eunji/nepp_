import { useState } from "react";
import styled from "styled-components";
import { getPopular } from "../../../dataApi";
import PopularItem from "./PopularItem";

export default function PopularMovieList() {
  const [popularList, setPopularList] = useState([]);
  const getData = async () => {
    let { results } = await getPopular();
    setPopularList(results);
  };
  getData();

  return (
    <ContentList>
      <PopularItem popularList={popularList} />
    </ContentList>
  );
}

const ContentList = styled.div`
  display: flex;
  width: 100vw;
  height: 550px;
  margin: 20px 0 50px;
  padding: 0 30px;
  overflow-x: scroll;
`;
