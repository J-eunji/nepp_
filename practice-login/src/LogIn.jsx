import { useState } from "react";
import { logIn } from "./utils/auth";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function LogIn() {
  const [inputs, setInputs] = useState([
    {
      email: "",
      password: "",
    },
  ]);


  const [cookies, setCookie, removeCookie] = useCookies();

  // 객체 한번에 관리하기
  const handleInput = (e) => {
    // console.log(e.target)
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onLogIn = async (e) => {
    e.preventDefault();
    try {
      const result = await logIn(inputs);
      console.log(result.data.data.token);
      setCookie("acess_token", result.data.data.token, {
        path:"/",
        secure: true,
        sameSite: false,
      });
    } catch (e) {
      // alert(e);
    }
  };

  return (
    // form 태그 안에서 enter 하면 submit 이벤트 발생
    // onkeydown이랑 onclick 두개로 분리할 필요 X
    <div>
      <form style={formStyle} onSubmit={onLogIn}>
        {/* 로그인 폼 */}
        <label>
          email:
          <input type="email" name="email" onChange={handleInput} />
        </label>
        <label>
          password:
          <input type="password" name="password" onChange={handleInput} />
        </label>
        <button>로그인</button>
      </form>
      <button>
        <Link to="signin">회원가입</Link>
      </button>
    </div>
  );
}
