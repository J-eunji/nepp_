import { useState } from "react";
import styled, { css } from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Accordian() {
  // styled-component에 props
  // true일 때 p보이고 false 일때 안보이게
  const [active, setActive] = useState(false);
  return (
    <Block active={active}>
      <TitleBox>
        <h3>제목</h3>
        <span onClick={() => setActive(!active)}>
          <TiArrowSortedDown />
        </span>
      </TitleBox>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
        eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        totam possimus aperiam dolorem at voluptates explicabo unde rerum sint,
        molestiae saepe impedit voluptas iste, officiis amet? Tenetur doloribus
        quisquam et!
      </p>
    </Block>
  );
}

const Block = styled.div`
  padding: 10px;
  background: #f2f2f2;
  margin-bottom: 10px;
  border-radius: 4px;
  h3 {
    padding: 10px 0;
  }
  p {
    max-height: 0;
    overflow: hidden;
    transition: 0.2s;
  }
  ${({ active }) =>
    active &&
    css`
      p {
        overflow: scroll;
        max-height: 100px;
      }
      ${TitleBox} {
        span {
          transform: rotate(180deg);
        }
      }
    `}
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    display: inline;
    font-size: 0.8em;
    cursor: pointer;
    user-select: none;
  }
`;
