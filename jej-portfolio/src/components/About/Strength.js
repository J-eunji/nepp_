import styled from "styled-components";

export default function Strength({ strength }) {
  const { name, icon } = strength;
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
`;

const Name = styled.span`
  font-size: 0.8em;
  font-weight: 700;
`;

const Icon = styled.div`
  font-size: 45px;
`;
