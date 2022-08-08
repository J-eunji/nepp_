// 리액트 불러오기
import React from "react";

// const title = "react";
// 함수 작성
function Hello({ title, children }) {
  // 매개변수 안에 중괄호 열어서 객체 비구조화 할당 가능, 간단히 표현 가능
  // JS값은 중괄호 안에 사용한다.(JSX문법)
  // 중괄호 안에 표현식 등 모두 사용 가능
  return (
    <div>
      <h1>Hello, {title}</h1>
      <p>{children}</p>
    </div>
  );
}

// title이 전달 안됐을 때
// 값을 객체형태로
Hello.defaultProps = { title: "React" };

// 내보내기
export default Hello;
