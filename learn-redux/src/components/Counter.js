import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../reducer/counter";

// 화면에 실제로 그려지는 component

export default function Counter() {
  // useSelector를 통해 Provider의 store값을 읽을 수 있다.
  // state의 값은 store.getState() 함수를 호출했을 때
  //나타나는 결과물과 동일함.
  const num = useSelector((state) => state.counter);

  // useDispatch를 통해 store.dispatch 가져오기
  // App에 있는 거 가져오는 것
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increase());
  };

  const sub = () => {
    dispatch(decrease());
  };

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={() => add()}>+1</button>
      <button onClick={() => sub()}>-1</button>
    </div>
  );
}
