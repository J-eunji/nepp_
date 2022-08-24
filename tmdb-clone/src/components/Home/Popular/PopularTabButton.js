import { useState } from "react";
import styled, { css } from "styled-components";

export default function PopularTabButton() {
  const [tabList, setTabList] = useState([
    { id: 1, text: `영화`, active: true },
    { id: 2, text: `TV`, active: false },
  ]);
  const tabClick = (id) => {
    setTabList(
      tabList.map((button) => {
        return button.id === id
          ? { ...button, active: true }
          : { ...button, active: false };
      })
    );
  };

  const makeBtn = tabList.map((button) => {
    return (
      <Button
        key={button.id}
        active={button.active}
        onClick={() => tabClick(button.id)}
      >
        {button.text}
      </Button>
    );
  });

  return <Container>{makeBtn}</Container>;
}

const Container = styled.div`
  display: flex;
  height: 30px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  margin-left: 10px;
`;

const Button = styled.button`
  display: flex;
  padding: 0 20px;
  border: none;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  ${({ active }) =>
    active &&
    css`
      color: #fff;
      background-color: #000;
    `}
  p {
    font-size: 18px;
    line-height: 30px;
  }
`;
