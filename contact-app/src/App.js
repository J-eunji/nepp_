import { RecoilRoot } from "recoil";
import Counter from "./components/Counter";
import PostList from "./components/post/PostList";
import TodoBlock from "./components/TodoBlock";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";

function App() {
  // RecoilRoot 안에 있어야 atom으로 만든
  // countState를 사용할 수 있다.
  return (
    <PostList></PostList>
    // <RecoilRoot>
    //   <Counter />
    //   <TodoHeader />
    //   <TodoInput />
    //   <TodoBlock />
    // </RecoilRoot>
  );
}

export default App;
