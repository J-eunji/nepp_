import styled from "styled-components";
import PopularItem from "./PopularItem";

export default function PopularList() {
  return (
    <Container>
      <h3>인기 영화</h3>
      <PopularItem />
      <h3>인기 TV</h3>
      <PopularItem />
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 0px;
  overflow: hidden;
  h3 {
    padding: 0 40px;
    font-size: 1.8em;
  }
`;
