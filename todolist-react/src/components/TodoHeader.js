import styled from "styled-components";
import { main_color } from "../color";

export default function TodoHeader({ count }) {
  return (
    <Block>
      <h2>2022년 08월 05일</h2>
      <p>해야할 일 : {count}개</p>
    </Block>
  );
}

const Block = styled.header`
  padding: 10px;
  color: ${main_color};
  h2 {
    margin-bottom: 10px;
  }
  p {
    font-size: 0.8em;
  }
`;
