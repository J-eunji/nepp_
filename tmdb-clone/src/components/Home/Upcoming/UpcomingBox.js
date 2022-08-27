import styled from "styled-components";
import Title from "../../common/Title";
import UpcomingList from "./UpcomingList";

export default function UpcomingBox() {
  return (
    <Container>
      <Title rank={"upComing"} />
      <UpcomingList />
    </Container>
  );
}

const Container = styled.div``;
