import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./components/Home";
import scdream from "./assets/fonts/SCDream3.ttf";
import scdreamBold from "./assets/fonts/SCDream7.ttf";
import english from "./assets/fonts/THEBOLDFONT.ttf";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Home />
    </RecoilRoot>
  );
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "content";
  src: url(${scdream});
  unicode-range: U+AC00-D7A3;
}

@font-face {
  font-family: "contentBold";
  src: url(${scdreamBold});
  unicode-range: U+AC00-D7A3, U+0041-005A, U+0061-007A;
}

@font-face {
  font-family: "titleEn";
  src: url(${english});
  unicode-range: U+0041-005A, U+0061-007A;
}

* {
  list-style: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
}

#root p, span {
  font-family: 'content';
}

#root h4{
  font-family: 'contentBold';
}

#root header, h1, h2, h3, h5, h6 {
  font-family: 'titleEn';
  font-weight: lighter;
}
`;

export default App;
