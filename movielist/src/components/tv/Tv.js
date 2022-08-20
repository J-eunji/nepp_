import { Route, Routes } from "react-router";
import DetailBox from "../detail/DetailBox";

export default function Tv() {
  return (
    <div>
      TV
      <Routes>
        <Route path="/" element={<div>TV show 목록</div>} />
        <Route path="/:id" element={<DetailBox />} />
      </Routes>
    </div>
  );
}
