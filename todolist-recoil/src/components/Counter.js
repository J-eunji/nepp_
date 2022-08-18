import { useRecoilValue } from "recoil";
import { countState } from "../atoms/count";
import Button from "./Button";

export default function Counter() {
  // useRecoilValue => 상태값만 가져올 수 있음, 배열형태
  const count = useRecoilValue(countState);
  return (
    <div>
      <h3>{count}</h3>
      <Button />
    </div>
  );
}
