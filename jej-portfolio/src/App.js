import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./components/Home";
import scdream from "./static/fonts/SCDream3.ttf";
import scdreamBold from "./static/fonts/SCDream7.ttf";
import english from "./static/fonts/THEBOLDFONT.ttf";
import "./font.css";

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

#root h1 {
  font-family: 'titleEn';
  font-weight: lighter;
}
`;

export default App;
