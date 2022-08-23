import { createGlobalStyle } from "styled-components";
import Main from "./components/Home/Main";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Main></Main>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
`;

export default App;
