// default는 중괄호 필요X, default 아닌건 필요
// default는 표현식, 함수나 클래스만 가능
import styled, { css } from "styled-components";
import { main_color, hover_color, active_color } from "../color";
import { useState } from "react";

export default function TodoInput({ onCreate }) {
  // isEdit의 초기값은 false, setIsEdit으로 값 업데이트
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState("");
  const onSubmit = () => {
    if (input !== "") {
      onCreate(input);
      setInput("");
      setIsEdit(false);
    }
  };
  return (
    <Block isEdit={isEdit}>
      {/* 조건부 렌더링: isEdit이 true일 때만 && 뒤 값 평가 */}
      {/* 단축평가 */}
      {/* 버튼 자체를 렌더링중 */}
      {/* isEdit이 True가 되면 input 등장 */}
      {isEdit && (
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      )}
      {/* Submit: 클릭하면 */}
      {/* Add: 클릭하면 isEdit을 true로, input 등장 */}
      {isEdit ? (
        <Button isNotEmpty={input !== ""} onClick={onSubmit}>
          Submit
        </Button>
      ) : (
        <Button isNotEmpty={true} onClick={() => setIsEdit(true)}>
          Add
        </Button>
      )}
    </Block>
  );
}
const Block = styled.div`
  padding: 10px;
  input {
    width: 100%;
    height: 30px;
    padding: 0 5px;
    outline: none;
    border: 1px #ddd solid;
    margin-bottom: 10px;
    transform: scaleY(0);
    transform-origin: bottom;
  }

  ${(isEdit) =>
    isEdit &&
    css`
      input {
        transform: scaleY(1);
      }
    `};
`;
const Button = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 3px;
  background: ${main_color};
  color: white;
  background-color: #ddd;
  ${({ isNotEmpty }) =>
    isNotEmpty &&
    css`
      background-color: ${main_color};
      cursor: pointer;
      &:hover {
        background-color: ${hover_color};
      }
      &:active {
        background-color: ${active_color};
      }
    `};
`;
