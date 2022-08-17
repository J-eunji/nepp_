import styled, { css } from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";
import { useTodoDispatch } from "../contexts/useTodoContext";

export default React.memo(function Item({ todo }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => {
    dispatch({ type: "toggle", id: todo.id });
  };
  const onRemove = () => {
    dispatch({ type: "remove", id: todo.id });
  };
  return (
    // done은 아래 styled.ul component에서 썼기 때문에
    // ul 안의 li에 done 함수를 작성했어도
    // ul에 써야지 적용이 된다!!!!!!!!!
    <ItemList done={todo.done}>
      <li onClick={onToggle}>{todo.text}</li>
      <BtnStyle>
        <FaTrashAlt onClick={onRemove} />
      </BtnStyle>
    </ItemList>
  );
});

const ItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20em;
  cursor: pointer;
  border-bottom: lightgray 1px solid;
  user-select: none;
  li {
    flex: 1;
    padding: 10px 15px;
    ${({ done }) =>
      done &&
      css`
        text-decoration: line-through;
        color: lightgray;
      `}
  }
`;

const BtnStyle = styled.div`
  opacity: 0.2;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
