// import Counter from "./components/Counter";
// import Hello from "./components/Hello";
// import InputTitle from "./components/InputTitle";
// import InputTitleCopy from "./components/InputTitleCopy";
// import MovieList from "./components/MovieList";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import { useState, useRef } from "react";

const initialState = [
  {
    id: 1,
    name: "kaka",
    email: "kaka@gmail.com",
    isFriend: false,
  },
  {
    id: 2,
    name: "kkamji",
    email: "kkamji@gmail.com",
    isFriend: true,
  },
];

function App() {
  // 데이터
  const [userList, setUserList] = useState(initialState);

  const nextId = useRef(3);
  const onCreat = (name, email) => {
    setUserList([
      ...userList, // 새로운 값 추가
      {
        id: nextId.current,
        // 키값 = 변수이름 -> 생략 가능
        // name : name;
        name,
        email,
        isFriend: false,
      },
    ]);
    nextId.current++;
  };
  const onRemove = (id) => {
    // 삭제 기능 구현
    setUserList(userList.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    // isFreind 값 반전시키기
    setUserList(
      userList.map((user) => {
        return user.id === id ? { ...user, isFriend: !user.isFriend } : user;
      })
    );
  };
  return (
    <div>
      <CreateUser onCreat01={onCreat} />
      {/* 보라색 userList는 UserList.js 파일의 */}
      <UserList
        userList01={userList}
        onRemove01={onRemove}
        onToggle01={onToggle}
      />
      {/* <Hello>
        <Counter />
      </Hello>
      <InputTitle />
      <InputTitleCopy />
      <MovieList /> */}
    </div>
  );
}

export default App;
