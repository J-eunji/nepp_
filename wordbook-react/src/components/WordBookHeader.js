import styled, { css } from "styled-components";

export default function WordBookHeader({ state }) {
  const count = state.length;
  // 외운 단어 갯수: 배열.length
  const mCount = state.filter((word) => word.active).length;
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  let Mc = count !== 0 ? mCount / count : count;
  console.log(Mc);
  return (
    <HeaderBlock>
      <h2>{todayStr}</h2>
      <p>
        외운 단어: {mCount}/{count}
      </p>
      <StatusBar status={Mc * 100}>
        <p>{Math.floor(Mc * 100)}%</p>
      </StatusBar>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

const StatusBar = styled.div`
  height: 16px;
  background-color: #ddd;
  margin-top: 10px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  color: #fff;
  p {
    position: absolute;
    font-size: 12px;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
  }
  &::before {
    content: "";
    display: block;
    height: 100%;
    ${({ status }) => css`
      transform: scaleX(${status}%);
    `}
    transform: ${({ status }) => `scaleX(${status}%)`};
    transform-origin: left;
    background-color: black;
    transition: 0.2s;
  }
`;
