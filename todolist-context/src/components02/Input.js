import { useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../contexts/useTodoContext";
export default function Input({ input }) {
  const [active, setActive] = useState(false);
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onCreate = () => {
    dispatch({ type: "create", id: nextId.current });
    nextId.current++;
  };
  const onChange = (e) => {
    dispatch({ type: "change", input: e.target.value });
  };

  const onClickBtn = () => {
    if (active) {
      onCreate();
      setActive(false);
    } else setActive(true);
  };

  return (
    <InputBox active={active}>
      {/* onChange는 이벤트를 전달함, box.js 에 e.target.value로 값으로 만들어줌 */}
      <input type="text" onChange={onChange} value={input} />
      <button onClick={onClickBtn}>{active ? "Submit" : "+"}</button>
    </InputBox>
  );
}
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 15px;
  input {
    height: 35px;
    margin: 5px 0;
    padding: 5px;
    transform: scaleY(0);
    transition: 0.2s;
    transform-origin: bottom;
    ${({ active }) =>
      active &&
      css`
        transform: scaleY(1);
      `}
  }
  button {
    height: 30px;
    border: none;
    background-color: lightgray;
    cursor: pointer;
  }
`;
