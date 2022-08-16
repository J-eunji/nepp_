import About from "./components/About";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useLocation } from "react-router";

// 함수형태로 styled 쓰면 덮어씌우기 가능
// styled(태그이름) Link는 react에서 제공한 컴포넌트라 가능
// 보통 이미 스타일 쓴 걸 덮어씌우는데 쓴다~
// css 값을 하나만 할당할 때
// background: ${({ active }) => (active ? "pink" : "none")};
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  ${({ active }) =>
    // 한번에 여러 개 값 지정할 때
    active &&
    css`
      background: pink;
      color: white;
    `};
`;
function App() {
  const url = pathname.split()[1];
  console.log(url);
  return (
    <div>
      <StyledLink to="/" active={pathname === "/"}>
        home
      </StyledLink>
      <StyledLink to="/about" active={pathname === "/about"}>
        about
      </StyledLink>
      <Routes>
        {/* path=경로, element=뭘 보여줄건데?? */}
        <Route path="/" element={<Home />} />
        {/* 와일드카드! *은 모든 것 의미, / 뒤에 뭐라도 오면~, 중첩라우팅할때 사용 
        about 안의 내용 + 뒤의 내용 모두 출력 
        // 주소에 따라 출력되는 컴포넌트 지정
        <BrowserRouter> 안에서 사용해야 함*/}
        <Route path="/about/*" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
