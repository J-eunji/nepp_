// 교통카드
// 잔액: 남은 금액
// 충전: 잔액 증가
// 사용: 잔액 감소
// 금액: 충전/사용 금액
// 내역 (배열 형태)

import { useReducer } from "react";

const initialState = {
  amount: 0,
  price: 1000,
  history: [],
};

function reducer(state, action) {}

function TrafficCard() {
  // 상태값state, 함수dispatch = userReducer(함수reducer,초기값initalState )
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>잔액: </h3>
      <p>
        금액: <input type="number" step={1000} min={1000} defaultValue={1000} />
      </p>
      <button onClick={() => dispatch({ test: "테스트" })}>충전</button>
      <button>사용</button>
    </div>
  );
}

export default TrafficCard;
