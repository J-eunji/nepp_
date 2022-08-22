import { Routes, Route } from "react-router";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import Movie from "./components/movie/Movie";
import Tv from "./components/tv/Tv";

function App() {
  return (
    <div>
      <GlobalStyle />
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

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: black;
  }
`;

const MainBlock = styled.div`
  padding: 50px 100px;
`;

export default App;
