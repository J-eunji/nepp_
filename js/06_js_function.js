// 함수 : 실행할 코드를 미리 작성하고 필요할 때 사용
// ex. console.log()는 함수이다.
// 유지보수가 용이하고 재사용성 좋음.
// 매개변수(Parameter): 함수를 실행할 때 함수에 필요한 값을 지정하는 변수

function div() {
  console.log("-----------------------------------------");
}

// 매개변수 없음
function sum() {
  //실행할 코드 작성
  var num1 = 3;
  var num2 = 13;
  var result = num1 + num2;
  console.log(result);
}

sum();

// 매개변수 있는 함수
// function() 안에 변수를 필요한 개수만큼 변수 이름 지정
// a, b는 매개변수
function divide(a, b) {
  console.log(a / b);
}

// 매개변수를 통해 실제로 전달되는 값을 인자(argument)라고 함
// 10, 5는 인자
divide(10, 5);

// return : 함수의 실행 결과로 값 반환
// => 함수의 실행결과를 return된 값으로 평가

function plus(a, b) {
  return a + b;
}

console.log(plus(3, 4));

// return 사용하면 함수 종료
function sub(a, b) {
  return;
  console.log(a - b);
}

sub(1, 2);

// return 맨 마지막만 실행,
// 여러 개의 리턴 허용X
function square(num) {
  return num, num * num;
}
console.log(square(4));

// 짝수인지 홀수인지 출력하는 함수
function numType(a) {
  if (a % 2 === 0) {
    console.log("짝수");
  } else console.log("홀수");
}

div();

//문제_ 세 숫자의 평균을 구하는 함수 => 함수의 값 출력
// => 심화 함수를 두 개로 분리.
function avg(x, y, z) {
  return (x + y + z) / 3;
}

console.log(`평균값은 ${avg(3, 45, 54)}입니다.`);

//문제_ 세 숫자의 평균을 구하는 함수 => 함수 값 출력
// => 심화 함수를 두 개로 분리.

function sum1(x, y, z) {
  let sum1R = x + y + z;
  console.log(`${x}, ${y}, ${z}의 총합은 ${sum1R}이고, `);
  return sum1R;
}

var total = sum1(453, 548, 849);

function avg1(sum1R) {
  let avg1R = parseInt(sum1R / 3);
  console.log(`평균은 ${avg1R} 입니다.`);
}

avg1(total);

div();

//함수 선언문: function, 함수 호이스팅 발생

getMovie(); //함수 호이스팅 발생
function getMovie() {
  console.log("영화 목록 받는 중...");
}

getMovie();

// 익명함수: 함수 이름이 없음. 변수에 담는다.
// 함수 표현식: 변수에 함수를 담는 형태로 작성
let getSongs = function () {
  console.log("음악 목록 받는 중...");
};

getSongs();

console.log(typeof getMovie, typeof getSongs);

// 화살표 함수: => 화살표를 통해서 간략히 함수 정의 가능
// 코드블록 생략하면 바로 return
// 코드블록 생략안하면 return 명시해야함
// 콜백함수로 전달할 때 주로 사용
// 함수 호이스팅 X
// this: 전역공간의 전역객체
// method 호출 시 method 내부의 this: 해당 메소드를 호출한 객체
// 화살표 함수는 this를 무시한다.

let sumString = (str1, str2) => {
  return str1 + str2;
};
console.log(sumString("안녕하세요. ", "저는 카카입니다."));

let sumstring = (str1, str2) => str1 + str2;
console.log(sumstring("안녕하세요. ", "저는 카카입니다."));

// 콜백함수: 함수의 인자로 전달된 함수
// JS의 함수는 일급객체라서 가능

function consoleNum(num) {
  console.log(num);
}

function repeat(n, func) {
  for (let i = 0; i < n; i++) {
    func(i);
  }
}

repeat(5, consoleNum);

div();

// 더하기, 빼기 화살표 함수로 작성

let sum02 = (num3, num4) => num3 + num4;
let sub02 = (num3, num4) => num3 - num4;

// n번 반복하는 함수 만들어서 더하기, 빼기 n번 반복
// (반복횟수, 시작숫자, 콜백함수)

let callback = (num, num2) => num + num2;

function sumSub02(n, startNum, total) {
  let sum = startNum;
  for (i = 1; i <= n; i++) {
    sum = total(sum, i);
  }
  return sum;
}

console.log(sumSub02(10, 10, callback));

// let sumNum = (a, b) => a + b;

// function repeatCal(n, startNum, callback) {
//   let result = startNum;
//   for (let i = 0; i < n; i++) {
//     result = callback(result, i);
//   }
//   return result;
// }
// console.log(repeatCal(5, 10, sumNum));

// 콜백함수 개념 이해하기,,,
let user = {
  greeting: function (func) {
    console.log("시작");
    func(1);
    console.log("끝");
  },
};

user.greeting(function (num) {
  console.log("저는 콜백함수입니다." + num);
});

user.greeting(function () {
  console.log("저는 두번째 콜백함수입니다.");
});
