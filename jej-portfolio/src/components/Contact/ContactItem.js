import styled from "styled-components";
import scdream from "../../assets/fonts/SCDream3.ttf";

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
  @font-face {
    font-family: "content";
    src: url(${scdream});
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F,
      U+003A-0040, U+005B-0060, U+007B-007E;
  }

  display: flex;
  align-items: center;
  padding: 13px 0;
  font-family: "content";
  span {
    font-size: 30px;
    margin-right: 10px;
  }
  a {
    color: black;
  }
`;
