import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </RecoilRoot>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  list-style: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  user-select: none;
}`;

export default App;
