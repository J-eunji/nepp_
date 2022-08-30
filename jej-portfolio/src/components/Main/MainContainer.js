import { BsChevronDoubleDown } from "react-icons/bs";
import styled from "styled-components";
import mainImgMono from "../../assets/imgs/mainImgMono.png";

export default function MainContainer() {
  return (
    <Container>
      <MainBox>
        <h2>FRONT-END PORTFOLIO</h2>
        <Name>JUNG EUNJI</Name>
      </MainBox>
      <ScrollBtn>
        <BsChevronDoubleDown />
      </ScrollBtn>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${mainImgMono});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 400px;
  color: #ddd;
  margin-top: 130px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  h2 {
    font-size: 2.7em;
  }
`;

const Name = styled.h1`
  font-size: 3.5em;
  margin-top: 20px;
`;

const ScrollBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  width: 50px;
  height: 50px;
  margin-top: 100px;
  cursor: pointer;
`;
