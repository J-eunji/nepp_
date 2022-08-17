import { createContext, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useTodoState } from "../contexts/useTodoContext";
import Header from "./Header";
import Input from "./Input";
import List from "./List";

export const TodoContext = createContext(null);

export default function Box() {
  const { input, todoList } = useTodoState();
  const doneCount = useMemo(
    () => todoList.filter((todo) => todo.done).length,
    [todoList]
  );
  return (
    // provider 안에 있는 value는 전역적으로 값을 사용할 수 있음.
    <>
      <Globalstyle />
      <Block>
        <Header totalCount={todoList.length} doneCount={doneCount} />
        <List todoList={todoList} />
        <Input input={input} />
      </Block>
    </>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;
  border: gray 1px solid;
`;

const Globalstyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;
