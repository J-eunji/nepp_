import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { indexState } from "./atoms";
import { useRecoilState } from "recoil";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [index, setIndex] = useRecoilState(indexState);
  const pageName = [
    { id: 1, name: "About" },
    { id: 2, name: "Project" },
    { id: 3, name: "Contact" },
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
      <HomeLogo onClick={() => onClickMenu(0)}>Jung</HomeLogo>
      <GnbList>
        {pageName.map((page) => (
          <li key={page.id} onClick={() => onClickMenu(page.id)}>
            {page.name}
          </li>
        ))}
      </GnbList>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 130px;
  padding: 0 200px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  ${({ active }) =>
    active &&
    css`
      /* background-color: rgba(255, 255, 255, 0.2); */
      transition: 0.2s;
    `}
`;

const HomeLogo = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2.5em;
  font-weight: 700;
  z-index: 100;
  cursor: pointer;
`;

const GnbList = styled.ul`
  display: flex;
  font-size: 1.4em;
  padding: 10px;
  z-index: 100;
  font-weight: 600;
  p {
    margin-right: 25px;
  }
  li {
    cursor: pointer;
    font-weight: 600;
    margin: 0 45px;
  }
`;
