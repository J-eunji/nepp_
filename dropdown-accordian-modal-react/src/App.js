import { Reset } from "styled-reset";
import styled from "styled-components";

// import Accordian from "./components/ui/Accordian";
import Dropdown from "./components/ui/dropdown";
import Modal from "./components/ui/Modal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(true);
  return (
    <>
      <Reset />
      <Template>
        <Block>
          <Dropdown />
          {/* <Accordian />
            <Accordian />
            <Accordian /> */}
        </Block>
        {modal && <Modal setModal={setModal} />}
      </Template>
    </>
  );
}

const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Block = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
`;

export default App;
