import styled from "styled-components";

export default function ContactItem({ contact }) {
  const { icon, text, link } = contact;
  return (
    <Container>
      <span>{icon}</span>
      <a href={link} target="_blank">
        {text}
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0;
  font-family: "contact";
  span {
    font-size: 30px;
    margin-right: 10px;
  }
  a {
    color: black;
  }
`;
