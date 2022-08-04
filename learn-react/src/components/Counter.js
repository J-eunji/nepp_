// react에 있는 useState 함수 불러오기
import { useState } from "react";

function Counter() {
  // 값에 변화가 있으면 전체를 다시 실행
  // 클로저(자신이 선언될 당시의 환경을 기억하는 함수)
  // count 값을 참조하고 있음
  // useState(초기값);
  const [count, setCount] = useState(0);
  const [inputNum, setInputNum] = useState(0);
  function add() {
    // 비동기적 작동 -> 일괄적 처리
    setCount(count + inputNum);
    setCount(count + inputNum);
    setCount(count + inputNum); // 1씩 증가
  }
  function sub() {
    // 함수형 업데이트: set 함수의 인자로 콜백함수 전달
    // 최적화 할 때 사용
    // set 함수의 인자로 콜백함수를 전달하면 콜백함수의
    // 첫번째 인자로 최신 상태값을 전달
    // 콜백함수의 첫번째 인자로
    // 최신 상태값 전달
    setCount((count) => count - inputNum); // num 최신값 참조
    setCount((count) => count - inputNum);
    setCount((count) => count - inputNum); //3씩 감소
  }
  function onChangeInput(e) {
    let inputNum = parseInt(e.target.value);
    setInputNum(inputNum);
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={add}>증가</button>
      <button onClick={sub}>감소</button>
      증가량: <input type="number" onChange={onChangeInput} />
    </>
  );
}

export default Counter;
