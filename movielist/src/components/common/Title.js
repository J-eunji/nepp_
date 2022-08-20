import styled from "styled-components";

export default function Title({ title, margin }) {
  return <TitleText margin={margin}>{title}</TitleText>;
}

const TitleText = styled.h3`
  font-weight: 700;
  font-size: 1.4em;
  margin: ${({ margin }) => margin};
`;
