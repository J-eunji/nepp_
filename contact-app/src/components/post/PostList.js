import axios from "axios";
import { useState } from "react";

export default function PostList() {
  const [postList, setPostList] = useState([]);
  const [input, setinput] = useState("");
  const instance = axios.create({
    baseURL: "http://localhost:8000/",
  });

  const onChange = (e) => {
    setinput(e.target.value);
  };

  const fetchData = async () => {
    // http 요청을 할 수 있는 js 내장 함수
    // 기본적으로 get 요청을 함
    // then 대신 await 사용하여 가독성 높임
    // await 비동기처리가 끝난다음에 실행이 된다! 복습 ㄱㄱ
    // data 비구조화 할당
    try {
      let { data } = await instance.get("posts/");
      setPostList(data);
    } catch (err) {
      console.log(err);
    }

    // try {
    //   let result = await fetch("http://localhost:8000/posts");
    //   let data = await result.json();
    //   setPostList(data);
    // } catch (err) {
    //   console.log(err);
    // }

    // fetch("http://localhost:8000/posts")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    //   .catch((err) => console.log(err));
  };

  const createPost = async () => {
    // try {
    //   fetch("http://localhost:8000/posts", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       title: input,
    //       author: "kaka",
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      let { data } = await instance.post("posts/", {
        title: input,
        author: "kaka",
      });
    } catch (err) {
      console.log(err);
    }
  };

  // patch: 부분적 업데이트 -> author 만 덮어씌우기
  // put: 통째로 덮어씌운다
  const patchPost = async (id) => {
    let result = await instance.patch("posts/" + id, {
      author: "kkamji",
    });
    fetchData();
  };

  const deletePost = async (id) => {
    let result = await instance.delete("posts/" + id);
    console.log(result);
    fetchData();
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={createPost}>등록</button>
      <ul>
        {postList.map((post) => (
          <li key={post.id} onClick={() => patchPost(post.id)}>
            {post.title}({post.author})
            <button onClick={() => deletePost(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>받아오기</button>
    </div>
  );
}
