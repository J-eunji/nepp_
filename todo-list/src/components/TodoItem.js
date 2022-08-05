import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export default function TodoItem({ todo, onToggle, onRemove }) {
  // 삭제 버튼 눌렀을 시 list가 왼쪽으로 사라지게 할건데
  // 눌렀을 시에만!!! 삭제한다가 중점. true / false 이용
  const [disappear, setDisappear] = useState(false);
  return (
    <Block
      onClick={() => onToggle(todo.id)}
      done={todo.done}
      disappear={disappear}
    >
      <p>{todo.text}</p>
      <BtnDel
        onClick={(e) => {
          // 이벤트 리스닝 멈춰~~ 버블링 멈춰~~
          e.stopPropagation();
          setDisappear(true);
          setTimeout(() => {
            onRemove(todo.id);
          }, 350);
        }}
      >
        <div>Del</div>
      </BtnDel>
    </Block>
  );
}

const slideOut = keyframes`
to {
  transform: translate(-100%)
}`;

const Block = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  align-items: center;
  font-size: 0.8rem;
  user-select: none;
  cursor: pointer;
  p {
    ${({ disappear }) =>
      disappear &&
      css`
        animation: ${slideOut};
        animation-duration: 0.3s;
      `}
  }
  ${({ done }) =>
    done &&
    css`
      p {
        text-decoration: line-through;
        color: #ddd;
      }
    `};
`;

const BtnDel = styled.div`
  div {
    width: 30px;
    height: 30px;
    padding: 5px;
    background: red;
    color: white;
    transform: translate(100%);
    transition: 0.25s;
  }
  &:hover {
    div {
      transform: translate(0);
    }
  }
`;
