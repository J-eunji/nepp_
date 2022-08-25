import { RecoilRoot } from "recoil";
import Header from "./Header";
import PopularBox from "./Popular/PopularBox";
import Slider from "./Slider";
import UpcomingBox from "./Upcoming/UpcomingBox";

export default function Main() {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Slider />
        <PopularBox />
        <UpcomingBox />
      </RecoilRoot>
    </>
  );
}
