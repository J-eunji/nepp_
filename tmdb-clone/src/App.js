import styled, { createGlobalStyle } from "styled-components";
import Main from "./components/Home/Main";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Main />
    </Container>
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

const Container = styled.div`
  overflow-x: hidden;
`;

export default App;
