import styled, { css } from "styled-components";

export default function TabMenu({ menu, onClickTab }) {
  const { active, text, id } = menu;
  return (
    <TabMenuBlock onClick={() => onClickTab(id)} active={active}>
      {text}
    </TabMenuBlock>
  );
}

const TabMenuBlock = styled.button`
  padding: 10px 20px;
  ${({ active }) =>
    active &&
    css`
      background-color: #ddd;
      color: #fff; ;
    `}
`;
