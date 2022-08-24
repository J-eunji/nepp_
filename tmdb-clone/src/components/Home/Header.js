import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Logo>Home</Logo>
      <GnbList>
        <li>Movie</li>
        <li>TV</li>
      </GnbList>
      <SearchBox>
        <input type="text" placeholder="영화 제목, TV 제목, 배우 이름" />
        <BiSearchAlt2 size={30} cursor="pointer" />
      </SearchBox>
    </Container>
  );
}

const Container = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 50px;
`;

const Logo = styled.h1`
  cursor: pointer;
`;

const GnbList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 50px;
  flex: 1;
  li {
    font-size: 1.2em;
    padding: 20px;
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  display: flex;
  input {
    width: 300px;
    height: 30px;
    margin-right: 5px;
    padding: 0 5px;
  }
`;
