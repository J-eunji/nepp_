import styled, { css } from "styled-components";
import { indexState } from "./atoms";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

export default function Header() {
  const [index, setIndex] = useRecoilState(indexState);
  const [gnbName, setGnbName] = useState([
    { id: 1, name: "About", active: false },
    { id: 2, name: "Project", active: false },
    { id: 3, name: "Contact", active: false },
  ]);

  const onClickHeader = (id) => {
    setIndex(id);
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setGnbName(
      gnbName.map((gnb) =>
        gnb.id === index ? { ...gnb, active: true } : { ...gnb, active: false }
      )
    );
  }, [index]);

  const makeGnb = gnbName.map((page) => (
    <Gnb
      key={page.id}
      onClick={() => onClickHeader(page.id)}
      active={page.active}
    >
      {page.name}
    </Gnb>
  ));

  return (
    <Container>
      <HomeLogo onClick={() => onClickHeader(0)}>Jung</HomeLogo>
      <GnbList>{makeGnb}</GnbList>
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
`;

const Gnb = styled.li`
  cursor: pointer;
  font-weight: 600;
  margin: 0 45px;
  color: transparent;
  -webkit-text-stroke: 1px #000;
  &:hover {
    color: #000;
    -webkit-text-stroke: 0px;
  }
  ${({ active }) =>
    active &&
    css`
      color: #000;
      -webkit-text-stroke: 0px;
    `}
`;
