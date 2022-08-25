import styled, { css } from "styled-components";
import UpcommingItem from "./UpcommingItem";
import { getVideos, getUpcoming } from "../../../dataApi";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { tabState } from "../../atoms/tabList";

export default function UpcomingList() {
  const [movie, setMovie] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const tabList = useRecoilValue(tabState);
  const imgUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const category = tabList.find((tab) => tab.active).category;
    const getResults = async () => {
      let { results } = await getUpcoming(category);
      setMovie(results);
    };
    getResults();
  }, [tabList]);

  useEffect(() => {
    const getVideoUrl = async () => {
      const category = tabList.find((tab) => tab.active).category;
      let data = await getVideos(movie, category);
      let idresults = data.map((obj) => obj.data);
      let results = idresults.map((obj) => obj.results);
      let resultdata = results.filter((obj) => obj[0] !== undefined);
      setVideoList(resultdata);
    };
    getVideoUrl();
  }, [movie, tabList]);
  return (
    <ContentList imgUrl={imgUrl}>
      {videoList.map((video, idx) => (
        <UpcommingItem key={idx} video={video.key} movie={movie} />
      ))}
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
