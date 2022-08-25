import styled from "styled-components";
import PopularList from "./PopularList";
import Title from "../../common/Title";

export default function PopularBox() {
  return (
    <Container>
      <Title />
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
