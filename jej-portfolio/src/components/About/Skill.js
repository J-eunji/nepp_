import styled, { css, keyframes } from "styled-components";

export default function Skill({ skill, scaleX }) {
  const { name, degree } = skill;
  return (
    <Container>
      <Name>{name}</Name>
      <Percentage degree={degree} scaleX={scaleX} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  height: 50px;
  padding: 35px 60px;
`;

const Name = styled.span`
  width: 100px;
  font-size: 1.2em;
  font-weight: 700;
`;

const scaling = keyframes`
  from {
    transform: scaleX(0) ;
  }
`;

const Percentage = styled.div`
  border: #000 2px solid;
  ${({ degree }) => css`
    width: ${degree * 6}px;
  `}
  ${({ scaleX }) =>
    scaleX &&
    css`
      animation: ${scaling} 1.5s;
      animation-fill-mode: forwards;
      transform: scaleX(1);
      transform-origin: 0 100%;
    `}
`;
