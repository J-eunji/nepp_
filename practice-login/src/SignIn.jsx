import { useState } from "react";
import { signIn } from "./utils/auth";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function SignIn() {
  const [inputs, setInputs] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);

  const { name, email, password } = inputs;

  // 객체 한번에 관리하기
  const handleInput = (e) => {
    // console.log(e.target)
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSignIn = async (e) => {
    // form submit 발생 시 새로고침 방지
    // scroll, whell 등에서도 사용 가능
    e.preventDefault();
    // signIn은 프로미스라서 async를 써줌(auth.js에 있는 Promise)
    // async에서 값을 return 하면 return을 resolve하는 Promise 반환
    const result = await signIn(name, email, password);

    console.log(result);
  };

  return (
    // form 태그 안에서 enter 하면 submit 이벤트 발생
    // onkeydown이랑 onclick 두개로 분리할 필요 X
    <form style={formStyle} onSubmit={onSignIn}>
      {/* 회원가입 폼 */}
      <label>
        name:
        <input type="text" name="name" onChange={handleInput} />
      </label>
      <label>
        email:
        <input type="email" name="email" onChange={handleInput} />
      </label>
      <label>
        password:
        <input type="password" name="password" onChange={handleInput} />
      </label>
      <button>회원가입</button>
    </form>
  );
}
