import styled from "styled-components";
import { btn_color } from "../color";

export default function Button({ text }) {
  return <StyleButton>{text}</StyleButton>;
}

const StyleButton = styled.div`
  width: 100%;
  padding: 7px 0;
  color: #fff;
  text-align: center;
  font-weight: 700;
  border-radius: 4px;
  background-color: ${btn_color};
  cursor: pointer;
  ${({ margin }) => margin}
`;
