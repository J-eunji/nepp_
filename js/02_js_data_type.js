// 식: 값으로 평가되서 새로운 값 생성.
// => 값으로 평가될 수 있는 모든 게 식.
var result = 10 + 30;

// 문: 프로그램을 구성하는 최소 단위. 식에 문 포함
var x; // 변수 선언문. 값으로 평가가 될 수 없기 때문에 식X
if (true) console.log("진실"); //조건문

//자료형(data type): 프로그램이 처리할 수 있는 자료의 형태
//typeof

//숫자형(number): 숫자를 나타내는 데이터. ""없이 숫자만 입력
var year = 2022; //정수
const PI = 3.14; //실수
console.log(typeof year, typeof PI); // JS에서는 정수와 실수 구분X

//문자열(string): 문자를 나타내는 데이터. "", ''안에 작성
// => ""와 '' 구분X
var firstName = "eunji";
var strNum = "1"; // 문자열
console.log(1 + "2"); // JS에서는 숫자+문자 => 문자열로 출력
console.log(typeof firstName, firstName);

//논리형(boolean): true false로 표현되는 자료형
//조건문 필요
var isTrue = true;
console.log(typeof isTrue);

//조건문을 논리형으로 반환
//10은 100보다 크다 -> 거짓 false로 반환
var isBig = 10 > 100;
console.log(isBig);

// undefined = 값이 정의되지 않음. (의도 X)
// null = 비어있음. (유효하지 않은 상태라고 명시함)
var abc = null; // null 출력
var def; // undefined 출력
console.log(abc, def);

// "카카"와 9의 데이터 타입 비교
let dogName = "kaka";
let dogAge = 9;
console.log(typeof dogName == typeof dogAge);

// 객체:object 여러값 저장 가능
var user1 = {
  name: "seok",
  age: 30,
  height: 173,
};
