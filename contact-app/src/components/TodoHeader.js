import { useRecoilValue } from "recoil";
import { undoneCount } from "../atoms/todo";

export default function TodoHeader() {
  const count = useRecoilValue(undoneCount);
  return (
    <div>
      <h3>할 일: {count}개</h3>
    </div>
  );
}
