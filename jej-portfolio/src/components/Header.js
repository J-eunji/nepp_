import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Container active={scroll > 170}>
      <HomeLogo>Portfolio</HomeLogo>
      <ProjectList>
        <p>Project</p>
        <li>#1</li>
        <li>#2</li>
        <li>#3</li>
      </ProjectList>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  ${({ active }) =>
    active &&
    css`
      background-color: #fff;
      transition: 0.2s;
    `}
`;

const HomeLogo = styled.h1`
  font-size: 2.2em;
  display: flex;
  align-items: center;
  z-index: 100;
  cursor: pointer;
`;

const ProjectList = styled.ul`
  display: flex;
  font-size: 1.6em;
  padding: 10px;
  z-index: 100;
  font-weight: 600;
  p {
    margin-right: 25px;
  }
  li {
    cursor: pointer;
    font-weight: 600;
    margin: 0 25px;
  }
`;
