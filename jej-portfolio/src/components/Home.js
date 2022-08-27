import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainSection from "./About/MainSection";
import Diary from "./Project/Diary";
import Movie from "./Project/Movie";
import Tistory from "./Project/Tistory";

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
  }, [index, isScrolling]);

  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <Container>
      <MainSection />
      <Movie />
      <Diary />
      <Tistory />
    </Container>
  );
}

const Container = styled.div`
  overflow-x: hidden;
`;
