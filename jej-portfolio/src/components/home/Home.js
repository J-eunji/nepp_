import { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./about/About";
import Project from "./Project/Project";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sectionChange = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);

      if (e.deltaY > 0) {
        if (index < 5) {
          setIndex((index) => index + 1);
        }
      } else if (index > 0) {
        setIndex((index) => index - 1);
      }
    };

    window.addEventListener("wheel", sectionChange, { passive: false });
    return () => {
      window.removeEventListener("wheel", sectionChange, { passive: false });
    };
  }, [index, isScrolling]);

  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <Container>
      <About />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </Container>
  );
}

const Container = styled.div``;
