import styled, { css } from "styled-components";
import UpcommingItem from "./UpcommingItem";
import { getVideos, getUpcoming } from "../../../dataApi";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { tabState } from "../../atoms/tabList";

export default function UpcomingList() {
  const [movieList, setMovieList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [upComingList, setUpComingList] = useState([]);
  const tabList = useRecoilValue(tabState);
  const imgUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getResults = async () => {
      let { results } = await getUpcoming();
      setMovieList(results);
      setUpComingList(...upComingList, [...results]);
    };
    getResults();
  }, []);

  useEffect(() => {
    const getVideoUrl = async () => {
      let data = await getVideos(movieList);
      let idresults = data.map((obj) => obj.data);
      let results = idresults.map((obj) => obj.results);
      let resultdata = results.map((obj) =>
        obj[0] !== undefined ? obj[0] : {}
      );
      let idchange = resultdata.map((obj) => {
        return { ...obj, url: obj.id };
      });
      setVideoList(idchange);
      setUpComingList([...upComingList, ...videoList]);
    };
    getVideoUrl();
  }, [movieList, tabList]);

  console.log(upComingList);

  return (
    <ContentList imgUrl={imgUrl}>
      {upComingList.length > 0 &&
        upComingList
          .map((upComing, idx) => (
            <UpcommingItem key={idx} upComing={upComing} />
          ))
          .slice(0, 5)}
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
  ${({ imgUrl, backdropPath }) =>
    css`
      background-image: ${imgUrl}${backdropPath};
    `}
`;
