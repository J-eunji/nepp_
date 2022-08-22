import { createGlobalStyle } from "styled-components";
import Home from "./components/main/Home";
import Project from "./components/Project/Project";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  list-style: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}`;

export default App;
