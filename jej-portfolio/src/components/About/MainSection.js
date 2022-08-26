import { useState } from "react";
import styled from "styled-components";
import MainContainer from "./MainContainer";

export default function MainSection() {
  const [maskX, setMaskX] = useState(0);
  const [maskY, setMaskY] = useState(0);
  const handleMask = (e) => {
    setMaskX(e.clientX);
    setMaskY(e.clientY);
  };

  return (
    <Section onMouseMove={(e) => handleMask(e)}>
      <MainContainer />
      <MainContainer isClone={true} maskX={maskX} maskY={maskY} />
    </Section>
  );
}

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
