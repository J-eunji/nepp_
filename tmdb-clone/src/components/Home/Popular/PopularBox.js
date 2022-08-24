import styled from "styled-components";
import PopularList from "./PopularList";
import PopularTitle from "./PopularTitle";

export default function PopularBox() {
  return (
    <Container>
      <PopularTitle />
      <PopularList />
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 0px;
  overflow: hidden;
  h3 {
    font-size: 1.8em;
    height: 35px;
  }
`;
