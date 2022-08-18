// 상태 관련 로직만!!

// 추가, 삭제, 토글
// action type(상수)
// 자동완성으로 오타방지 외 기능X
const CREATE_TODO = "CREATE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

// action 생성하는 함수 생성
// Todo.js 에 import 해주자!
export const createTodo = (id, text) => ({ type: CREATE_TODO, id, text });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });
export const removeTodo = (id) => ({ type: REMOVE_TODO, id });

// reducer
export default function todo(state = [], action) {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat({ id: action.id, text: action.text, done: false });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
