import { createGlobalStyle } from "styled-components";
import WordBook from "./components/WordBook";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }
  li {
    list-style: none;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <WordBook />
    </div>
  );
}

export default App;
