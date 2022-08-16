import styled from "styled-components";

export default function Header({ totalCount, doneCount }) {
  const todayDate = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  // todoList와 input이 하나의 state로 관리되기 때문에
  // 여기서 사용하지 않는 input이 업데이트가 되어도
  // 리렌더링이 일어난다.
  // const { todoList } = useTodoState();

  const percent =
    totalCount !== 0 ? Math.floor((doneCount / totalCount) * 100) : totalCount;

  return (
    <HeaderBox>
      <h5>TodoList</h5>
      <h2>{todayDate}</h2>
      <p>
        할 일 : {doneCount}/{totalCount} 개
      </p>
      <StatusBar percent={percent}>
        <p>{percent}% 완료</p>
      </StatusBar>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  width: 100%;
  border-bottom: lightgray 1px solid;
  padding: 10px;
  h2 {
    padding: 5px 0;
  }
`;

const StatusBar = styled.div`
  background: #ddd;
  font-size: 0.7em;
  color: white;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  position: relative;
  height: 20px;
  overflow: hidden;
  margin-top: 5px;
  &::before {
    content: "";
    display: block;
    height: 100%;
    transform-origin: left;
    transform: ${({ percent }) => `scaleX(${percent}%)`};
    transition: 0.25s;
    background-color: #000;
  }
  p {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
  }
`;
