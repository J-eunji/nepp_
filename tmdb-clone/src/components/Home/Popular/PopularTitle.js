import styled from "styled-components";
import PopularTabButton from "./PopularTabButton";

export default function PopularTitle() {
  return (
    <Container>
      <h3>인기</h3>
      <PopularTabButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0 40px;
  margin-top: 20px;
  align-items: flex-end;
  height: 35px;
`;
