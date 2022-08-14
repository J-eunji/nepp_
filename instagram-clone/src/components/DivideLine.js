import styled from "styled-components";
import { border_color } from "../color";

export default function DivideLine({ text }) {
  return (
    <LineBox>
      <Line />
      <DivideText>{text}</DivideText>
      <Line />
    </LineBox>
  );
}

const LineBox = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${border_color};
`;

const DivideText = styled.p`
  padding: 0 15px;
  font-weight: 700;
  color: rgba(142, 142, 142);
`;
