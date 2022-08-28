import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { indexState } from "./atoms";
import { useRecoilState } from "recoil";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [index, setIndex] = useRecoilState(indexState);
  const pageName = [
    { id: 1, name: "# TMDB" },
    { id: 2, name: "# DIARY" },
    { id: 3, name: "# CLONE" },
  ];
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const onClickMenu = (id) => {
    setIndex(id);
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  };

  return (
    <Container active={scroll > 170}>
      <HomeLogo onClick={() => onClickMenu(0)}>Portfolio</HomeLogo>
      <ProjectList>
        <p>Project</p>
        {pageName.map((page) => (
          <li key={page.id} onClick={() => onClickMenu(page.id)}>
            {page.name}
          </li>
        ))}
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
