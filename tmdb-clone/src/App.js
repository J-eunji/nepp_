import { createGlobalStyle } from "styled-components";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home></Home>
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
