// 변수 var : 재선언, 재할당 가능
// 변수 let : 재선언 불가, 재할당 가능
// 변수 const : 재선언, 재할당 불가
var num = 10;

// 콘솔창에 출력해줌
console.log(num);

// 변수 선언: 값을 저장할 메모리 공간 마련, 이름 붙임
// -> undefinde가 초기화 됨.
var age;

var year; // year 변수 선언.
let month; // month 변수 선언.

// const 변하지 않는 상수.
// 처음부터값을 설정해줘야 함.
// 이름을 대문자로 사용.
const DAY = 20;

// 호이스팅: JS 변수, 함수처럼 PG 실행에 필요한 정보를 실행 전에 읽음.=>var만 해당
console.log(score); // 변수 선언전에 실행했지만
var score; // undefined가 출력됨

// let, const 키워드는 호이스팅 발생X
// console.log(birthDay);
// let birthDay;

//할당: 선언된 변수(메모리)에 값을 저장.
score = 90; //score라는 변수에 90이는 값을 할당(저장).
console.log(score);
score = 100; //score라는 변수에 100이라는 값 재할당.

// 선언과 할당 동시에 가능 => 초기화.
console.log("firstName: ", firstName); //선언 부분만 호이스팅.
var firstName = "eunji";

// 참조: 변수에 저장된 값을 읽는다.
// 변수 이름 특수문자 제외 문자, 숫자, 언더바( _ ), 달러 ($) 사용 가능
// 변수 이름은 숫자로 시작할 수 없음.
// 변수 이름은 대소문자 구분.

// first name => firstName : 카멜 케이스
// first name => first_name : 스네이크 케이스
// first name => FirstName : 파스칼 케이스(클래스명에 주로 사용)

// 문제1 num1과 num2를 선언하고 각각 20, 30을 할당하여 출력
var num1, num2;
num1 = 20;
num2 = 30;
console.log("num1 =", num1, ", num2 =", num2);

// 문제2 num1과 num2를 더한 값을 result 변수에 할당하여 출력
var result = num1 + num2;
console.log("num1 + num2=", result);

// 문제3 num1과 num2를 서로 바꿔서 할당
var temp = num1;
num1 = num2;
num2 = temp;

console.log("num1 =", num1, ", num2 =", num2);
