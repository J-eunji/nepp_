import { createContext, useContext, useReducer, useRef } from "react";

const initialState = {
  input: "",
  todoList: [
    {
      id: 1,
      text: "클릭하면 할 일 완료!",
      done: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "change":
      // return 값: 다음 state 값이 된다.
      return {
        ...state,
        input: action.input,
      };
    case "create":
      return {
        ...state,
        input: "",
        // concat은 기존데이터를 건드리지 않는다.
        todoList: state.todoList.concat({
          id: action.id,
          text: state.input,
          done: false,
        }),
      };
    case "toggle":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "remove":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    default:
      return {
        state,
      };
  }
}
// prop drilling을 피하기 위해서, 성능 최적화
// redux를 이해하기 위한 과정
// provider 밖에서 반환되는 값을 createContext() 안에 지정
// provider에 포함안되는 컴퍼넌트가 있으면 null을 반환
export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);
export const TodoNextIdContext = createContext(null);

// TodoProvider(todolist 제공자)라는 컴포넌트를 만듦
// TodoProvider 컴포넌트 안의 자식요소들 = useTodoContext.js 안의 {children}
// todostateContext 컴포넌트의 자식요소인 children들이(Box.js 참조)
// TodoStateContext.Provider의 value인 state를 사용할 수 있게 됨.
// Provider는 중첩사용이 가능, dispatch도 사용 가능함
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(3);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 여기 있는 useTodoState, useTodoDispatch, useTodoNextId는 커스텀훅
// 여기서 만든 컴포넌트(useTodoState)를 자식요소(children)에
// const { input } = useTodoState();
// 이런 식으로 불러오면 사용 가능
// { input } 으로 비구조할당이 가능한 이유는
// useTodoState() 안의 useContext로 만든
// TodoStateContext에 state(input, todolist)가 담겨있기 때문.
export function useTodoState() {
  // TodoStateContext = state
  const context = useContext(TodoStateContext);
  // 프로바이더의 자식요소 위치가 아닌 곳에서 사용할 경우
  if (!context) {
    //  에러 메세지 띄우기
    throw new Error("프로바이더를 찾을 수 없습니다.");
  }
  return context;
}

export function useTodoDispatch() {
  // TodoStateContext = state
  const context = useContext(TodoDispatchContext);
  // 프로바이더의 자식요소 위치가 아닌 곳에서 사용할 경우
  if (!context) {
    //  에러 메세지 띄우기
    throw new Error("프로바이더를 찾을 수 없습니다.");
  }
  return context;
}

export function useTodoNextId() {
  // TodoStateContext = state
  const context = useContext(TodoNextIdContext);
  // 프로바이더의 자식요소 위치가 아닌 곳에서 사용할 경우
  if (!context) {
    //  에러 메세지 띄우기
    throw new Error("프로바이더를 찾을 수 없습니다.");
  }
  return context;
}
