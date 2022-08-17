import styled, { css } from "styled-components";
import { active_color } from "../color";

export default function Button({ text, active }) {
  return <StyledButton active={active}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  width: 100%;
  padding: 8px 0;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 15px;
  ${({ active }) =>
    active &&
    css`
      background-color: ${active_color};
      cursor: pointer;
    `};
`;
