//식별자 : 변수나 함수를 식별할 수 있는 이름
//스코프 : 식별자가 유효한 범위.

//전역 스코프 : 어디서든 접근이 가능한 범위
//전역 변수 : 가장 밖에 선언된 변수들
let globalNum = 3;

function sum(a, b) {
  return a + b;
}

function addGlobalNum(num) {
  globalNum += num;
}

addGlobalNum(2);
console.log(globalNum);

console.log("-------------");

function outer() {
  let outerNum = 10;

  function inner() {
    let innerNum = 1;
    console.log(outerNum, innerNum);
  }
  inner();
}

outer();
