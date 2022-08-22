import styled from "styled-components";
import Header from "./Header";
import Info from "./Info";
import Introduce from "./Introduce";

export default function Home() {
  return (
    <Container>
      <Header />
      <Introduce />
      <Info />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;
