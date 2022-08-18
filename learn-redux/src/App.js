import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import counter from "./reducer/counter";
import todo from "./reducer/todo";
// import { combineReducers, createStore } from "redux";

// => redux는 @redux/toolkit의 configureStore 사용 권장함
const store = configureStore({
  // reducer에 객체 형태로 여러 reducer 지정하면 자동으로 합쳐짐
  // 편함~~
  reducer: {
    counter,
    todo,
  },
});

function App() {
  return (
    // Provider에 넣은 값은 자식요소에서 모두 쓸 수 있다.
    // Counter, Todo 컴포넌트에서 store를 쓸 수 있음.
    // 현재 store에는 reducer에 객체 형태로 counter, todo가 들어있음.
    <Provider store={store}>
      <Counter />
      <Todo />
    </Provider>
  );
}

// 정리
// App컴포넌트에 Provider import
// configureStore로 store(상태 저장소) 생성
// store에 관리할 reducer 넣기
// Provider에 store를 property로 지정
//
// 자식컴포넌트에
// useSelecter import / (state)=>state.property 불러오기
// useDispatch import / state의 dispatch 함수 불러오기

export default App;

// counter 함수 대신 import counter 한거임
// function counter(state = 10, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// {id: 1, text: "text", done: false}
// function todoReducer(state = [], action) {
//   switch (action.type) {
//     case "create_todo":
//       return [...state, { id: action.id, text: action.text, done: false }];
//     default:
//       return state;
//   }
// }

// Counter와 Todo를 함께 쓰고 싶다면?
// 합치고 싶은 reducer 여러개를 combineReducers에 전달
// 근데 이거 잘 안 씀
// const rootReducer = combineReducers({
//   counter,
//   todo: todoReducer,
// });

// store: 상태값의 저장소
// => dispatch와 getState 메서드를 가지고 있음.
// const store = createStore(rootReducer);
