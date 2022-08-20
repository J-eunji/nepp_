import { Routes, Route } from "react-router";
import DetailBox from "../detail/DetailBox";

export default function Movie() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>영화</div>} />
        <Route path="/:id" element={<DetailBox />} />
      </Routes>
    </div>
  );
}
