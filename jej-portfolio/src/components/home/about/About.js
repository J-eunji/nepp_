import styled from "styled-components";
import Info from "./Info";
import Introduce from "./Introduce";

export default function About() {
  return (
    <Container>
      <Introduce />
      <Info />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
