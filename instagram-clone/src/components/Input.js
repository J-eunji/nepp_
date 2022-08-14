import styled, { css } from "styled-components";
import { bg_color, border_color, ph_color } from "../color";

export default function Input({
  name,
  type,
  placeholder,
  rightContent,
  onChange,
  length,
}) {
  return (
    <InputBox active={length > 0}>
      <PlaceHolder>{placeholder}</PlaceHolder>
      <input type={type} onChange={onChange} name={name} />
      {rightContent}
    </InputBox>
  );
}

const InputBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${bg_color};
  border: 1px solid ${border_color};
  height: 40px;
  & + & {
    margin-top: 10px;
  }
  input {
    flex: 1;
    padding: 12px 0 4px 10px;
    font-size: 12px;
    background-color: transparent;
    z-index: 100;
    outline: none;
    font-size: 16px;
    border: none;
  }
  ${({ active }) =>
    active &&
    css`
      input {
        font-size: 12px;
      }
      ${PlaceHolder} {
        transform: scale(0.8) translateY(-12px);
      }
    `}
`;

const PlaceHolder = styled.p`
  position: absolute;
  font-size: 12px;
  left: 10px;
  user-select: none;
  color: ${ph_color};
  transition: 0.25s;
  transform-origin: left;
`;
