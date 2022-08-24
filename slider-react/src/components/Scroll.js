import { useState } from "react";
import styled from "styled-components";

export default function Scroll() {
  const [index, setIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // 처음 마운트 할때만 이벤트 발생해서
  // 마운트된 시점의 값만 바라보고 있기 때문에
  // 함수형 업데이트를 해주어야 함.
  // 그래야 최신값으로 계속 업데이트가 됨.
  const handleIndex = () => {
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
  
    // index가 변할 때마다 [index]
    useEffect(() => {
      window.scrollTo({
        top: window.innerHeight * index,
        behavior: "smooth",
      });
    }, [index]);
  

  // 스크롤은 기존값 참조를 안해서 상관X
  // 핵심은 passive: false, e.preventDefault(); 있어야
  // 스크롤 기능을 막을 수 있다.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div style={{ height: "500vh" }}>
      <div style={{ position: "fixed", top: 0 }}></div>
    </div>
  );
}

const Text = styled.p`
  opacity: 0;
  ${({ scroll }) => css`
    transform: translate(${scroll > 200 ? scroll - 200 : 0})px;
    opacity: ${(scroll - 200) / 400};
    `
  }
`;
