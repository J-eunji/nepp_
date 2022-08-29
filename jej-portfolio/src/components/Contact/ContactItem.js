import styled from "styled-components";

export default function ContactItem({ contact }) {
  const { icon, link } = contact;
  return (
    <Container>
      <span>{icon}</span>
      <a href={link}>{link}</a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0;
  span {
    :nth-child(1) {
      font-size: 30px;
      margin-right: 10px;
    }
  }
  a {
    color: black;
  }
`;
