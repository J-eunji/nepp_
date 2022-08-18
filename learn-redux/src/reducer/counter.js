// 이 파일은 reducer 함수를 위한 것이고
// 실제로 보여지는 component는 Counter.js 이다.

// action type(상수)
// 자동완성으로 오타방지 외 기능X
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// action 생성하는 함수 생성
// Counter.js 에 import 해주자!
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

// reducer 함수
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
