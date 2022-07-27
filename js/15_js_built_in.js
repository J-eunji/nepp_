// Window
// 전역객체 : JS가 가장 먼저 만드는 특수한 객체
// => JS가 실행되는 환경에 따라 달라짐 => 브라우저에서는 window, Node.js에서는 global
// => 어디에도 속하지 않는 최상위 객체 (프로토타입 가장 위 X)
console.log(globalThis); //전역객체 참조

// window에 속해 있는 프로퍼티는 window. 생략가능
globalThis.console.log("얍");

a = 0; // global.a 에서 global.이 생략됨
globalThis.console.log(a);
globalThis.console.log(global);

// 빌트인 객체 : 전역객체에 포함되어 있는 객체

// Date 객체: 날짜와 시간에 대한 프로퍼티, 메서드 제공
// => 생성자 함수, new 키워드와 함꼐 호출하면 인스턴스 반환
// 날짜: 1970년 1월 1일(UTC) 자정부터 밀리초를 기준으로 경과한 시간
let today = new Date(); // 실행한 시점의 날짜
let year = today.getFullYear(); // 연도를 네자리로 반환
let month = today.getMonth(); // 0~11월 반환
let date = today.getDate(); // 1~31일 반환
let day = today.getDay(); // 0(일)~6(토)요일 숫자로 반환
console.log(year, month, date, day);

// 시간: 한국시간 기준
let hours = today.getHours(); // 0~23 시간 반환
let minutes = today.getMinutes(); // 0~59 분 반환
let seconds = today.getSeconds(); // 0~59 초 반환
console.log(hours, minutes, seconds);

// Date.parsse() => 문자열을 날짜로 해석
// 생성할때 문자열을 날짜로 전달해서 특정 날짜를 만들 수 있음.
let yesterday = new Date("2022-7-26 15:00:00");
console.log(yesterday); // UTC 기준
yesterday.setFullYear(2021);
yesterday.setMonth(0);
yesterday.setDate(12);
console.log(yesterday);

console.log(`오늘은 ${year}년 ${month + 1}월 ${date}일 입니다.`);

// year, month, day 외 dateStyle, timeStyle 등등
let dateStr = today.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(dateStr);

// Math : 수학관련 프로퍼티와 메서드 제공
console.log(Math.PI);

// Math.sin((각도 * Math.PI) / 180));
console.log(Math.sin((90 * Math.PI) / 180)); //sin
console.log(Math.cos((60 * Math.PI) / 180)); //cos
console.log(Math.tan((45 * Math.PI) / 180)); //tan

let float = 1.53123;
console.log(parseInt(float)); // 실수를 정수로 변환
console.log(Math.floor(float)); // 내림
console.log(Math.ceil(float)); // 올림
console.log(Math.round(float)); // 반올림

// 111 => 112
let int111 = 111;
console.log(Math.ceil(int111 + 0.1));

// 1의 자리 내림
// 115 => 110
let int115 = 115;
console.log(Math.floor(int115 / 10) * 10);

// 소수점 이하 100의 자리만 올림
// 11.11 => 1.2
let float02 = 11.11;
console.log(Math.ceil(float02 * 10) / 10);

// 랜덤 : 0 ~ 1 사이의 실수 반환
console.log(Math.floor(Math.random() * 100));

// 1 ~ 45 개 로또 6개 추첨 만들기
// while 버전
function getLotto() {
  let result = [];
  while (result.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (!result.includes(num)) result.push(num);
  }
  console.log(result);
}
console.log(getLotto());

// for 버전
function getLotto02() {
  let result01 = [];
  for (i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (!result01.includes(num)) result01.push(num);
    else i--;
  }
  console.log(result01);
}
console.log(getLotto02());
