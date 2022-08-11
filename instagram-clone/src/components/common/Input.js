import styled from "styled-components";
import { bg_color, border_color } from "../../color";
import Button from "../button";

export default function Input({ rightContent, passwordShow }) {
  return (
    <InputBox>
      {/* passwordShow: Form.js에서 받아온 삼항연산 */}
      <StyledInput type={passwordShow} />
      {/* rightContent: Form.js에서 받아온 button */}
      {rightContent}
    </InputBox>
    <Button />
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
