import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopularMovie } from "../../custom-axios";
import Title from "../common/Title";
import PopularItem from "./PopularItem";

export default function PopularList() {
  // 밖에서 선언해서 안에서 쓰고,, 다시 꺼낼수 있는,,
  // 상태업데이트..
  const [data, setData] = useState([]);
  const fetchData = async () => {
    let { results } = await getPopularMovie();
    setData(results);
  };
  console.log(fetchData);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ListBlock>
      <Title />
      <ul>
        {data.map((item) => (
          <PopularItem key={item.id} item={item} />
        ))}
      </ul>
    </ListBlock>
  );
}

const ListBlock = styled.div`
  margin-bottom: 100px;
  ul {
    margin-top: 30px;
    display: flex;
    overflow-x: scroll;
  }
`;
