import { useState } from "react";
import styled, { css } from "styled-components";
import { FaAngleDown, FaCheck } from "react-icons/fa";

export default function Dropdown() {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("메인메뉴");
  const onClickMenu = (value) => {
    setValue(value);
    setActive(false);
  };
  return (
    <Block active={active}>
      <ValueBox onClick={() => setActive(!active)}>
        {value}
        <span>
          <FaAngleDown />
        </span>
      </ValueBox>
      <ul>
        <MenuItem
          text="메뉴1"
          onClickMenu={onClickMenu}
          active={value === "메뉴1"}
        />
        <MenuItem
          text="메뉴2"
          onClickMenu={onClickMenu}
          active={value === "메뉴2"}
        />
        <MenuItem
          text="메뉴3"
          onClickMenu={onClickMenu}
          active={value === "메뉴3"}
        />
      </ul>
    </Block>
  );
}

function MenuItem({ text, onClickMenu, active }) {
  return (
    <MenuBlock onClick={() => onClickMenu(text)}>
      {text}
      {active && <FaCheck size={10} />}
    </MenuBlock>
  );
}

const Block = styled.div`
  transition: 0.25s;
  ul {
    display: none;
    border: 1px solid #ddd;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-top: 1px solid #ddd;
      border-right: 1px solid #ddd;
      transform: rotate(-45deg);

      position: absolute;
      top: -5px;
      left: 5px;
    }
  }
  ${({ active }) =>
    active &&
    css`
      ul {
        display: block;
        border: 1px solid #ddd;
      }
      ${ValueBox} {
        span {
          transform: rotateX(180deg);
        }
      }
    `}
`;

const ValueBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  user-select: none;
`;

const MenuBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    background-color: gray;
  }
`;
