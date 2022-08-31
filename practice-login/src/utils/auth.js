import axios from "axios";
import { Cookies } from "react-cookie";
// utils
// 컴포넌트 아닌 함수 담을 폴더
// query : 주소?키=값
// parameter : http://43.200.239.12/post/all/123 -> 마지막 123

// 쿠키 객체 생성
const cookies = new Cookies();

// access_token 키값 조회
const token = cookies.get("access_token");

// 토큰 저장되어 있다면 headers에 token 설정
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.defaults.baseURL = "http://43.200.239.12/users";

export async function signIn(form) {
  return await axios.post("users", form);
}

export async function logIn(form) {
  try {
    const result = await axios.post("/user/login", form);

    // 개발자도구 - 네트워크 - Ahthorization 확인
    // 로그인 성공시
    if (result.status === 201) {
      // header에 JWT 토큰 추가
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.data.token}`;
    }
  } catch (e) {
    // throw new Error()로 에러 커스텀 던지기
    // ->발생한 에러에 대한 처리를 컴포넌트에 작성
    throw Error("이메일 비번 확인");
  }
}
