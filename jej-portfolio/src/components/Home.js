import styled from "styled-components";
import React, { useEffect, useState } from "react";
import MainSection from "./Main/MainSection";
import About from "./About/About";
import Project from "./Project/Project";
import { indexState } from "./atoms";
import { useRecoilState } from "recoil";
import Contact from "./Contact/Contact";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [index, setIndex] = useRecoilState(indexState);
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
        if (index < 4) {
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
  }, [isScrolling, index, setIndex]);

  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <Container>
      <MainSection />
      <About />
      <Project />
      <Contact />
    </Container>
  );
}

const Container = styled.div`
  overflow-x: hidden;
`;
