// rest
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3, 100));

// 옛날 방식이라 잘 안 씀
// // arguments: 받은 인자를 모두 유사배열 형태로 모아놓은 변수
// function getSum() {
//   let argArr = Array.from(arguments);
//   let result = argArr.reduce(fuction (acc, curr) {
//     return acc + curr;
//   }, 0);
//   return result;
// }
// getSum(1, 2, 3, 4, 5);

//  ...rest: 받은 인자를 모두 배열로 모아준다.
//     => 전달될 인자가 몇 개인지 모를 때 사용
// 매개변수의 마지막에 써야한다.
// ...변수이름 형식으로 사용
function getSub(a, ...number) {
  // 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
  // 첫번째 인자는 a에 담기고 모든 인자가 numbers에 담긴다.
  let result = number.reduce((acc, curr) => acc - curr, 0);
  return result;
}
console.log(getSub(10, 20, 30, 40));

// 스프레드 문법
// 배열을 펼친다.
let numArr = [1, 2, 3, 4, 5];
let newArr = [0, ...numArr, 6];
console.log(newArr);

// 객체 스프레드
let obj = {
  name: "kaka",
  age: 8,
};
let copy = {
  // 복사할 값 먼저
  ...obj,
  // 덮어쓸 값 추가
  age: 9,
};

console.log(obj);
console.log(copy);

// ...배열이 몇 개인지 모를 때
console.log(Math.max(...numArr));

// 비구조화 할당 (destructuring)
// 리액트에서 많이 씀
// 함수의 리턴값을 여러 개 받을 때 유용함
let userNameList = ["kaka", "mongsil", "daru"];
let user01 = userNameList[0];
let user02 = userNameList[1];

// 순서대로 담아줍니다 .,
let [user03, user04, user05, user06] = userNameList;
console.log(user03, user04, user05, user06);

// 여러개 값을 한 번에 return한 것과 같은 효과
function getFunc(value) {
  value;
  let func = function (value) {
    console.log(value);
  };
  return [value, func];
}

// 리액트에서 자주 보게 될 구조
let [num, useNum] = getFunc(0);
console.log([num, useNum]); //0, 함수

// 객체 비구조화 할당
// {키이름1, 키이름2} = {키이름1, 키이름2}
// let {} 안에 변수이름과 같은 이름의 키를 갖고 있으면 할당
let rect = {
  width: 100,
  height: 200,
  getArea() {
    console.log(this.width * this.height);
  },
};
let { width, getArea } = rect; // 100, 20000
console.log({ width, getArea });

//////////////// 중요한갑다. 복습해야겟다.
// let inputText = document.querySelector("input");
// inputText.addEventListener("keydown", function (e) {
//   // e.target.value에 input의 입력값이 담긴다.
//   // let 중괄호~~^^
//   let { value } = e.target;
//   console.log(value);
// });
