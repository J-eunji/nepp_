import { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import styled, { css } from "styled-components";

export default function DiaryFake() {
  const [bg, setBg] = useState(true);
  const FadeOut = () => {
    setBg(false);
  };
  return (
    <div>
      <Fake bg={bg} />
      <SunIcon bg={bg}>
        <BsFillSunFill className="sun" onClick={() => FadeOut()} />
      </SunIcon>
    </div>
  );
}

const Fake = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding-top: 100px;
  background-color: #27253d;
  width: 100vw;
  height: 1000px;
  ${({ bg }) =>
    !bg &&
    css`
      display: none;
    `};
`;

const SunIcon = styled.div`
  position: absolute;
  top: 120px;
  left: 20px;
  z-index: 2;
  color: orange;
  cursor: pointer;
  font-size: 300px;
  ${({ bg }) =>
    bg
      ? css`
          .sun {
            &:hover {
              transform: rotate(360deg);
              transition: 10s;
            }
          }
        `
      : css`
          transform: translate(1540px, 60px);
          transition: 0.5s;
          font-size: 50px;
        `};
`;
