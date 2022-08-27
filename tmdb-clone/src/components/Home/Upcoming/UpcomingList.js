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
    const category = tabList.find((tab) => tab.active).category;
    const getResults = async () => {
      let { results } = await getUpcoming(category);
      setMovieList(results);
    };
    getResults();
  }, [tabList]);

  useEffect(() => {
    const getVideoUrl = async () => {
      const category = tabList.find((tab) => tab.active).category;
      let data = await getVideos(movieList, category);
      let idresults = data.map((obj) => obj.data);
      let results = idresults.map((obj) => obj.results);
      let resultdata = results.map((obj) =>
        obj[0] !== undefined ? obj[0] : {}
      );
      let idchange = resultdata.map((obj) => {
        return { ...obj, url: obj.id };
      });
      setVideoList(idchange);
    };
    getVideoUrl();
  }, [movieList, tabList]);

  setUpComingList(() => {
    for (let i = 0; i < videoList.length; ) {
      return [
        ...upComingList,
        {
          ...videoList[i],
          ...movieList[i],
        },
      ];
    }
  });

  return (
    <ContentList imgUrl={imgUrl}>
      {upComingList.map(
        (upcoming, idx) =>
          upcoming.overview !== undefined && (
            <UpcommingItem
              key={idx}
              videoUrl={upcoming.key}
              backdropPath={upcoming.backdrop_path}
              title={upcoming.title}
              overview={upcoming.overview}
            />
          )
      )}
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
