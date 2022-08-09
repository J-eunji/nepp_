export default function Modal() {
  return (
    <Container>
      <Box></Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  ${({ disappear }) =>
    disappear &&
    css`
      animation: ${fadeout};
      animation-duration: 0.4s;
    `}
  position: absolute;
  top: 0;
  left: 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 250px;
  background-color: white;
  position: relative;
`;

const BtnClose = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
