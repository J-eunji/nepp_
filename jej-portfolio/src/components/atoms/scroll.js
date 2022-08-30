import { useRef, useState } from "react";

export function Scroll() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef();
  if (!ref.current) return;
  window.addEventListener("scroll", () => {
    setScrollY(ref.current.getBoundingClientRect().top);
  });
  return scrollY;
}
