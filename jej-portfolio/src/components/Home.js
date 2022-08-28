import styled from "styled-components";
import React, { useEffect, useState } from "react";
import MainSection from "./About/MainSection";
import Diary from "./Project/Diary/Diary";
import Movie from "./Project/Movie";
import Tistory from "./Project/Tistory";
import { indexState } from "./atoms";
import { useRecoilState } from "recoil";

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
  }, [isScrolling, index]);

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
