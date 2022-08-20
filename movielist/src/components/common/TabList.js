import styled from "styled-components";

export default function TabList({ children }) {
  return <TabListBlock>{children}</TabListBlock>;
}

const TabListBlock = styled.div`
  display: flex;
`;
