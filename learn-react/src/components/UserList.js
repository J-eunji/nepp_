import React, { useEffect } from "react";
// 상태관리
function User({ user00, onToggle00, onRemove00 }) {
  const { id, name, email, isFriend } = user00;
  useEffect(() => {
    console.log(id, "User가 마운트됨");
    // 초기값 설정, API 요청할 때
    // setTImeout, setInterval
    // 라이브러리 사용
    return () => {
      console.log(id, "User가 언마운트됨");
      // 정리 함수
      // clearTimeout, clearInterval
      // 라이브러리 안에 인스턴스 지울 때
    };
  }, [id]);
  // deps: [] 안에 전달한 값이 변할 때마다 실행
  // => ex)keyword라는 상태값을 디펜던시에 넣고 keyword에 변화가 있을 때마다
  // API 호출
  useEffect(() => {
    console.log(id, "isFriend 값이 변함", isFriend);
    // useEffect 안에서 props나 상태값 사용하면 디펜던 시 추가해줘야 함
    // => 디펜던 시 추가하지 않으면 최신값 참조할 수 없음
  }, [isFriend, id]);

  //[] 자체를 전달 안하면 렌더링이 일어날 때마다 실행된다.
  useEffect(() => {
    console.log("user 렌더링이 일어남");
  });

  return (
    // && 앞이 true 여야 뒤의 값("blue") 적용
    <li
      style={{
        color: isFriend && "blue",
        display: "flex",
        alignItems: "center",
      }}
    >
      <p onClick={() => onToggle00(id)} style={{ cursor: "pointer" }}>
        {name}({email})
      </p>
      <button onClick={() => onRemove00(id)}>삭제</button>
    </li>
  );
}
function UserList({ userList01, onRemove01, onToggle01 }) {
  // 상위 컴포넌트가 리렌더링이 일어나면 하위 컴포넌트들도 렌더링이 다시 일어남
  useEffect(() => {
    console.log("UserList 렌더링");
  });
  let friendsCount = userList01.filter((user) => user.isFriend).length;
  return (
    <>
      <ul>
        {userList01.map((user) => {
          return (
            <User
              user00={user}
              onRemove00={onRemove01}
              onToggle00={onToggle01}
            />
            // <li
            //   key={user.id}
            //   style={{
            //     color: user.isFriend && "blue",
            //     display: "flex",
            //     alignItems: "center",
            //   }}
            // >
            //   <p
            //     onClick={() => onToggle01(user.id)}
            //     style={{ cursor: "pointer" }}
            //   >
            //     {user.name}({user.email})
            //   </p>
            //   <button onClick={() => onRemove01(user.id)}>삭제</button>
            // </li>
          );
        })}
      </ul>
      {/* isFriend:true인 User의 갯수 */}
      <div>친한 친구 수: {friendsCount}</div>
    </>
  );
}

export default UserList;

// react는 이벤트위임을 자동 처리

// 필요할 떄만 렌더링 일어남 => props 값이 변했을 때
// export default React.memo(UserList)
