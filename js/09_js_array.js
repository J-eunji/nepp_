// 배열: 중복된 값을 허용한다.
// 배열에 포함되어있는 데이터를 요소(element)라고 한다.
// JS의 배열은 다른 자료형의 데이터도 1개의 배열에 포함시킬 수 있다.
// 작성법: [데이터1, 데이터2 ...]
let arr = [1, 2, 3, "카카"];

//배열의 데이터 참조
//배열[인덱스];의 형태로 참조

console.log(arr[2]);

// 배열 추가
// push: 배열 맨 뒤에 추가
// unshift: 배열 맨 앞에 추가, 변경된 배열 길이 반환
arr[4] = "프론트엔드";
console.log(arr);

// 배열 값 제거
// 배열 맨 마지막에 값 추가, 제거
// shift: 배열 맨 앞 삭제, 삭제된 배열 반환
// pop: 배열 맨 뒤 삭제
let result = arr.push(6, 7, "js"); //새로 추가 후 배열 길이 반환.
console.log(result, arr);
result = arr.pop(); //제거된 요소를 반환 => 다른 배열로 이동시킴
console.log(result, arr);

let newArr = [];
newArr.push(arr.pop());
console.log(arr, newArr);

// splice : 배열 중간에 값을 제거 및 추가
// array.splice(시작 인덱스, 삭제할 개수, 추가할 값들...);
// array.splice(추가할 값 첫 번째의 인덱스, 0, 추가할 값들...)
let newArr1 = [1, 20, 30, 4, 5];
let newResult = newArr1.splice(1, 2, 2, 3); // 제거한 요소 배열로 모아서 반환
console.log(newResult, newArr1); // [1, 2, 3, 4, 5]
newArr1.splice(0, 2);
console.log(newArr1); // [3, 4, 5]
newArr1.splice(1, 0, 1, 2); // []
console.log(newArr1);

// slice: 배열에서 지정한 범위만큼 요소를 복사 => 원본 배열 변경X
// slice(시작 인덱스, 끝 인덱스) => 끝 인덱스는 복사 범위 포함X
let dogArr = ["kaka", "norang", "mongsil"];
let newDogArr = dogArr.slice(0, 2);
console.log(newDogArr);

// Array.include(값이름) : 인자가 배열 내에 존재하는지 궁금할 때
// true false 반환
console.log(dogArr.includes("norang"));

if (dogArr.includes === true);
console.log("있어요.");

// Array.indexOf(값이름) : 어디 있는지 궁금할 때
// =>인자로 전달된 값이 배열에 존재하지 않으면 -1 반환
// 존재하면 인덱스값 반환
console.log(dogArr.indexOf("kaka"));

// 문제
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// 문제_ fruits에 "banana"와 "orange" 사이에 "grape", "peach"
console.log(fruits.splice(2, 0, "grape", "peach"));
console.log(fruits);

// 문제_ fruits의 "banana" 하나를 삭제. 직접 "banana"의 인덱스 값 넣지 않고 삭제
// "banana"라는 값을 가지고 찾아서 삭제.
if (fruits.includes("banana")) {
  let bananaIndex = fruits.indexOf("banana");
  fruits.splice(bananaIndex, 1);
}
console.log(fruits);

// 문제_ 어떤 배열이 와도 배열의 모든 요소를 한번씩 console에 출력.
for (i = 0; i < fruits.length; i++) {
  console.log(`index ${i}의 인자: ${fruits[i]}`);
}

// 문제_ 배열의 짝수만 다시 새로운 배열에 할당.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersEven = []; // 새로운 빈 배열을 선언한다.
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbersEven.push(numbers[i]);
  }
}
console.log(numbersEven);

// concat() : 배열 2개 합쳐서 새로운 배열 반환
// 원본 배열은 그대로
let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];
// push는 배열 맨 마지막 요소에 배열을 넣음
// first.push(second);
// console.log(first);

let resultList = first.concat(second);
// 원본 배열은 그대로
console.log(first);
// 새로운 배열 반환
console.log(resultList);
