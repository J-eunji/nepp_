import { useCallback, useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [num, setNum] = useState(0);
  const onClick = useCallback(() => {
    setNum(0);
  }, []);
  return (
    <div className="App">
      <div
        className="num"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {num}
      </div>
      <Button onClick={onClick} />
    </div>
  );
}
