import styled, { css } from "styled-components";
import { bg_color, border_color } from "../../color";

export default function Input({
  placeholder,
  rightContent,
  passwordShow,
  onChange,
  name,
}) {
  return (
    <InputBox>
      <PlaceholderText>{placeholder}</PlaceholderText>
      {/* passwordShow: Form.js에서 받아온 삼항연산 */}
      <StyledInput
        name={name}
        type={passwordShow}
        onChange={onChange}
        active={value.length > 0}
      />
      {/* rightContent: Form.js에서 받아온 button */}
      {rightContent}
    </InputBox>
  );
}

const InputBox = styled.div`
  display: flex;
  background-color: ${bg_color};
  border: 1px solid ${border_color};
  /* inputbox 옆에 있는 inputbox */
  & + & {
    margin-top: 5px;
  }
`;

const StyledInput = styled.input`
  border: none;
  background-color: none;
  padding: 10px;
  outline: none;
  flex: 1;
`;

const PlaceholderText = styled.span`
  position: absolute;
  top: 0;
  left: 10px;
  height: 35px;
  line-height: 30px;
  color: rgb(142, 142, 142);
  font-size: 0.9em;
  ${({ active }) =>
    active &&
    css`
      color: Red;
    `};
`;
