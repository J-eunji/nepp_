// if: ()안의 조건식이 true면 코드 블록 실행 => false면 생략
if (true) {
  console.log("true일 때 값이 출력됩니다.");
}

var num = 3;
if (num > 0) {
  console.log(`${num}은(는) 양수입니다.`);
}

// 문제_숫자 값에 따라 짝수 여부
var num02 = 2;

if (num02 % 2 == 0) {
  console.log(`${num02}은(는) 짝수입니다.`);
} else {
  console.log(`${num02}은(는) 홀수입니다.`);
}

/* 문제_5의 배수이면서 
100보다 크면 값을 출력 */
var num03 = 100;

if (num03 > 100 && num03 % 5 == 0) {
  console.log(num03);
} else if (num03 <= 100 && num03 % 5 == 0) {
  console.log(`${num03}은(는) 100이하 입니다.`);
} else if (num03 > 100 && num03 % 5 !== 0) {
  console.log(`${num03}은(는) 5의 배수가 아닙니다.`);
} else {
  console.log(`${num03}은(는) 100이하, 5의 배수가 아닙니다.`);
}

// 문제_변수 data의 타입에 따라 데이터 타입 출력 (3가지)
var Variable01 = [1];
if (typeof Variable01 == typeof "문자열") {
  console.log(`${Variable01}은(는) 문자열입니다.`);
} else if (typeof Variable01 == typeof 1) {
  console.log(`${Variable01}은(는) 숫자형입니다.`);
} else if (typeof Variable01 == typeof true) {
  console.log(`${Variable01}은(는) 논리형입니다.`);
} else {
  console.log(`${Variable01}은(는) 문자열, 숫자형, 논리형이 아닙니다.`);
}

// switch : switch문의 값과 case의 값을 비교하여 실행
// break 안하면 true case 이후 case를 모두 실행함.
var data = "문자열";
var type = typeof data;
switch (type) {
  case "string": {
    console.log("문자열입니다.");
  }
  case "number": {
    console.log("숫자형입니다.");
  }
  default: {
    console.log("문자도 숫자도 아닙니다.");
  }
}

// score 변수에 0~100점 사이 점수 담아서
// 90점 이상 A등급, 80~89 B등급, 70~79 C등급, 69이하 D등급
// parseInt 소수점 버림 -> 실수를 정수로 바꿔줌.

var score = 99;
switch (parseInt(score / 10)) {
  case 9: {
    console.log("A등급");
    break;
  }
  case 8: {
    console.log("B등급");
    break;
  }
  case 7: {
    console.log("C등급");
    break;
  }
  case 6: {
    console.log("D등급");
    break;
  }
}

// 삼항 조건 연산자: 조건식 ? true일때:false일 때
var num02 = 4;
var result = num02 % 2 === 0 ? "짝수" : "홀수";
console.log(result);

function print(str) {
  console.log(str);
}

// 삼항 조건 연산자의 중첩
var result02 = num02 > 0 ? (num02 % 2 === 0 ? "짝수" : "홀수") : "음수";
console.log(result02);

// ||(or), &&(and)를 통한 단축 평가
// ||는 앞의 결과값에 따라 바뀜.
// 앞이 true면 뒤는 확인할 필요 X
var result03 = true || "거짓";
console.log(result03);

// &&는 앞이 true여도 뒤가 true인지 확인해야함.
// 앞이 false면 뒤의 값을 할당
var result04 = true && false;
console.log("result04" + result04);

var result05 = false && false;
console.log(result05);

// 단축 평가 예시
// 리액트에서 많이 사용
var num04 = -1;
var numType = num04 > 0 ? "양수" : "음수";
console.log(numType); // 음수

var numType2 = num04 > 0 && "양수";
console.log(numType2); // false
