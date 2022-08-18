import styled from "styled-components";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <HeaderBlock>
      <Logo>Movie</Logo>
      <Navigation />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  border: 1px solid #ddd;
  padding: 0 80px;
`;

const Logo = styled.h1`
  font-size: 1.6em;
  font-weight: 700;
`;
