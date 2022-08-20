import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopular } from "../../custom-axios";
import TabList from "../common/TabList";
import TabMenu from "../common/TabMenu";
import Title from "../common/Title";
import PopularItem from "./PopularItem";

export default function PopularList({ title }) {
  // 밖에서 선언해서 안에서 쓰고,, 다시 꺼낼수 있는,,
  // 상태업데이트..
  const [data, setData] = useState([]);
  const [tabList, setTabList] = useState([
    { id: 1, text: "Movie", active: true, category: "movie" },
    { id: 2, text: "TV", active: false, category: "tv" },
  ]);

  const onClickTab = (id) => {
    setTabList(
      tabList.map((menu) =>
        menu.id === id ? { ...menu, active: true } : { ...menu, active: false }
      )
    );
  };

  useEffect(() => {
    // tabList 업데이트 될 때마다 useEffect안의 코드 실행
    // -> tabList 변할 때마다 fetchData함수를 재생성
    const fetchData = async () => {
      // Array.prototype.find() => 조건에 부합하는 요소 한개만(첫번째)만 반환(배열x)
      const category = tabList.find((menu) => menu.active).category;
      let { results } = await getPopular(category);
      setData(results);
    };

    fetchData();
  }, [tabList]);

  console.log(tabList);

  const tabListJsx = tabList.map((menu) => (
    <TabMenu key={menu.id} menu={menu} onClickTab={onClickTab} />
  ));

  return (
    <ListBlock>
      <TitleBox>
        <Title title={title} margin="0 20px 0 0 " />
        <TabList>{tabListJsx}</TabList>
      </TitleBox>
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

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
