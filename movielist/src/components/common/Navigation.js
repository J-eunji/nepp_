import { Link } from "react-router-dom";
import styled from "styled-components";

// nav 분리 이유: 정보를 서버에서 수정할 때가 있음

const gnbList = [
  {
    id: 1,
    title: "HOME",
    url: "/",
  },
  {
    id: 2,
    title: "MOVIE",
    url: "/movie",
  },
  {
    id: 3,
    title: "TV",
    url: "/tv",
  },
];

export default function Navigation() {
  return (
    <NavBlock>
      <ul>
        {gnbList.map((menu) => (
          <NavItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </NavBlock>
  );
}

const NavBlock = styled.nav`
  ul {
    display: flex;
    margin-left: 50px;
    li + li {
      margin-left: 30px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function NavItem({ menu }) {
  return (
    <li>
      <StyledLink key={menu.id} to={menu.url}>
        {menu.title}
      </StyledLink>
    </li>
  );
}
