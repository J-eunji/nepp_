import styled from "styled-components";
import MainContainer from "./MainContainer";
import CloneContainer from "./CloneContainer";

export default function MainSection() {
  return (
    <Section>
      <MainContainer />
      <CloneContainer />
    </Section>
  );
}

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
