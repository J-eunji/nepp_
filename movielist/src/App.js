import { Routes, Route } from "react-router";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Movie from "./components/movie/Movie";
import Tv from "./components/tv/Tv";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <MainBlock>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/*" element={<Movie />} />
          <Route path="/tv/*" element={<Tv />} />
        </Routes>
      </MainBlock>
    </div>
  );
}

const MainBlock = styled.div`
  padding: 50px 100px;
`;

export default App;
