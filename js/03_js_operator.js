// 연산자 : 산술, 할당, 비교 등으로 새로운 값 생성.
// 피연산자: 연산에 사용되는 값
console.log(5 - 4); // 1 생성
console.log(10 > 4); // true 생성

//산술 연산자: 피연산자
console.log(5 + 1);
console.log(6 - 4);
console.log(6 * 4);
console.log(6 / 4);
console.log(6 % 4); // 나머지

// 단항 산술 연산자
// ++ 값 1 증가
// -- 값 1 감소
// + 값 변화 X
// - 양수는 음수로, 음수는 양수로 반전
var num = 10;
num++;
console.log(num);

// 전위 연산자
var result;
result = num++;
console.log(result, num);
result = --num; // -1부터 하고 할당
console.log(result, num);

//전위 연산자
result = --num + 10;
console.log(num, result);
result = num++ + 5;
console.log(num, result);
result = ++num * 3;
console.log(num, result);

// 할당 연산: 변수에 값을 할당하는 연산
var score = 90;
score += 10;
console.log(score);
score -= 10;
console.log(score);
score *= 2;
console.log(score);
score /= 3;
console.log(score);
score %= 7;
console.log(score);

// 일치 연산자: 좌항, 우항이 일치하는지 비교 -> 값/데이터타입을 비교
console.log("3 === 1 + 2 : ", 3 === 1 + 2); //true
console.log("3 === '3' : ", 3 === "3"); //false
console.log("0 === '' :", 0 === ""); //false
console.log("false === 0: ", false === 0); //false

// 동등 연산자: 좌항, 우항의 값이 동등한지 비교
// 0 == "0" true
// true == "1" true
// 잘 안 씀
console.log("3 == 1 + 2 : ", 3 == 1 + 2); //true

// 부동등 연산자 : 값이 동등하지 않으면 참, 동등하면 거짓
console.log(3 != 2); // 값이 동등하지 않으므로 true

// 불일치 연산자: 값이 일치하지 않으면 true, 일치하면 false
console.log("3" !== 3); // true

console.log(true || false); // or 연산자 좌항이 true -> true
console.log(true || false); // or 연산자 좌항이 true -> true

// 논리 연산자 : 좌항 , 우항의 논리값에 따라 논리값 반환
// ||(or) : 좌항 , 우항 중 하나라도 true면 true 모두 false여야 false
// !(not) : 부정
// &&(and) : 둘 중 하나라도 false면 false

console.log(3 > 1 && 4 < 10); // 좌항 우항 모두 true => true
console.log(!(2 == "2") && true == 1); // 좌항이 false => false
console.log(!(false || false)); //드모르간 법칙 (not A)&(not B)
console.log(!(false && false)); // (not A) || (not B) => 둘다 true면 false
console.log(!(2 < 1 || 2 < 3)); // 좌항
console.log(!(1 > 10 || 2 > 3));

//문자열 연결 연산자 => 템플릿 리터럴 사용 권장
let str = "안녕하세요. " + "카카입니다.";
console.log(str);
let name = "카카";
let age = 9;
let address = "서울";
console.log("저는 " + age + "세입니다.");
console.log(
  `안녕하세요. 저는 ${name}입니다. ${age}살이고 ${address}에 살고 있습니다.`
);

// 현재 연도 내 생년 변수에 담아 나이 구하기
let thisYear = 2022;
let birthYear = 1994;
console.log(thisYear - birthYear + 1); // 29

// 산술 할당 연산자 사용: 숫자 10에 +2 * 2 / 4 구하기
var num = 10;
num += 2;
num *= 2;
num /= 4;
console.log(num);
