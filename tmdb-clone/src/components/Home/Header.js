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
        <input type="text" />
        <button>검색</button>
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
  input {
    height: 30px;
  }
  button {
    height: 30px;
    padding: 0 10px;
    border: none;
  }
`;
