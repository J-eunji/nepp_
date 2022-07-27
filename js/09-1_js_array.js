// 고차 함수: 함수를 인자로 받거나 함수를 반환

// 함수를 인자로 받는 고차함수
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback();
  }
}

repeat(3, function () {
  console.log("안녕하세요.");
});

// 함수를 리턴하는 고차함수
function makeFunc(a, b) {
  return function () {
    console.log(a, b);
  };
}

let foo = makeFunc(1, 2);
foo();

let numArr = [1, 2, 3];
//numArr 요소를 한 번씩 출력하는 함수
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

// 배열의 고차함수

// 1. forEach() : 자동으로 배열의 길이만큼 반복.
// 각 요소를 인자로 전달받아 콜백 함수를 실행.
// forEach(콜백함수(요소, 인덱스값))
numArr.forEach(function (n, i) {
  console.log(`${i}번째 값: ${n}`);
});

// 2. filter() : 콜백함수의 실행결과가 true인 요소만 모아서 새로운 배열로 반환
let resultArr02 = numArr.filter(function (num) {
  return num % 2 === 0;
});
console.log(resultArr02);

// 화살표 함수와 같이 사용하면 가독성 극대화
// => 화살표 함수는 매개변수 하나면 () 생략 가능
let resultArr03 = numArr.filter((num) => num % 2 === 0);

//문제_ 문자열 3개인 배열에서 글자수가 5개 이상인 문자열만 모아서 반환
let dog = ["kaka", "norang", "mongsil"];
//name은 안에 있는 인자의 값들에 임의로 이름을 붙여준 것.
let dog05 = dog.filter((name) => name.length >= 5);
console.log(dog05);

//문제_ 나이가 5이상인 강쥐만 배열로 반환
let userArr = [
  {
    name: "kaka",
    age: 9,
  },
  {
    name: "norang",
    age: 4,
  },
  {
    name: "mongsil",
    age: 8,
  },
];
//user는 안에 있는 인자의 값들에 임의로 이름을 붙여준 것.
let dogAge = userArr.filter((user) => user.age >= 5);
console.log(dogAge);

// 3. map() : 배열 안 요소들을 가공해야할 때, return 된 값 모아서 반환
// => 기존 배열 길이 변경 X
let numArr02 = [4, 6, 7, 10];
let doubleNumArr = numArr02.map(function (num) {
  return num * 2;
});
console.log(doubleNumArr);

let divideNumArr = numArr02.map((num) => num / 2);
console.log(divideNumArr);

//문제_ user 이름 모아서 배열
let userName = userArr.map((info) => info.name);
console.log(userName);

//문제_ 나이 5이상인 강쥐 이름만 배열로 반환
let users = userArr.filter(function (user) {
  return user.age >= 5;
});
let names = users.map(function (user) {
  return user.name;
});
console.log(names);

//let names02 = userArr
//  .filter((user) => user.age >= 5)
//  .map((user) => user.name);
//console.log(names02);

let animals = [
  {
    name: "카카",
    type: "강아지",
  },
  {
    name: "멍구",
    type: "고양이",
  },
  {
    name: "다루",
    type: "강아지",
  },
];

let typeDog = animals.filter((cute) => cute.type === "강아지");
let dogName = typeDog.map((cute) => cute.name);
console.log(dogName);

// 4.reduce(초기값, 계산할 값) => 초기값 연산자 계산할값, 초기값설정(디폴트:0)
let scoreList = [90, 80, 70, 70, 60];

let totalScore = scoreList.reduce((acc, curr) => acc + curr, 0);
console.log(totalScore);

// reduce 콜백
let totalScore2 = scoreList.reduce(sum, 0);
function sum(a, b) {
  return a + b;
}

console.log(totalScore2);
