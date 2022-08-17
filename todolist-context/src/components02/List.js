import styled from "styled-components";
import Item from "./Item";
import React from "react";

export default React.memo(function List({ todoList }) {
  return (
    <ListBox>
      {todoList.map((todo) => (
        <Item key={todo.id} todo={todo}></Item>
      ))}
    </ListBox>
  );
});

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
`;
