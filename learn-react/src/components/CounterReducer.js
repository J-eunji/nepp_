// 상태관리
// reducer: 상태를 관리하는 함수 => 다양한 상태를 한꺼번에 관리할 때 사용
// action: 상태를 업데이트 하는데 필요한 정보를 담은 객체
// dispatch : 상태를 업데이트 하게끔 action 객체를 reducer에 전달하는 함수
// dispatch의 인자로 action을 전달하기
import { useReducer } from "react";

function reducer(state, action) {
  // 최신값 state, 액션 객체
  // dispatch에 있는 type값에 따라서 처리하겠다!
  switch (action.type) {
    case "increase": // action.type 이름이 increament 라면
      return state + 1; // state에 1을 더한다.
    case "decrease": // action.type 이름이 increament 라면
      return state - 1; // state에 1을 뺀다.
  }
}

function CounterReducer() {
  // const [상태값, 상태를 업데이트하도록] = useReducer(reducer(함수), 초기값)
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>{state}</h3>
      {/* type이 무엇인지에 따라 switch의 action.type을 정하겠다!
      dispatch에는 객체..즉 action을 담아서 reduce로 전달해 실행.,,. 
      dispatch: reduce야 이것좀 실행해주셈
       reduce: ㅇㅋㅇㅋ */}
      <button onClick={() => dispatch({ type: "increase" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-1</button>
    </div>
  );
}

export default CounterReducer;
