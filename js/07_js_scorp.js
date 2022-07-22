//식별자 : 변수나 함수를 식별할 수 있는 이름
//스코프 : 식별자가 유효한 범위.

//전역 스코프 : 어디서든 접근이 가능한 범위
//전역 변수 : 가장 밖에 선언된 변수들

//지역 스코프 : 코드 블록 내부의 범위
//상위 스코프에서 하위 스코프 식별자 참조 불가
//상위, 하위 스코프 식별자가 같으면 하위 참조
//하위에 없으면 상위 스코프 식별자 참조

//var 함수의 코드 블록의 스코프만 지원
//for, if문의 코드 블록에 선언하면 전역에 선언한 것과 동일
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

var x = 2;

function consoleX() {
  var x = 1;
  console.log(x);
}

console.log("x=" + x); // 전역변수의 x 불러옴

var y = 3;
console.log("for 돌리기 전 전역 스코프 y =", y);

for (i = 0; i < 3; i++) {
  y = y + i;
  console.log(y);
}
//for문 안의 변수이름은 전역 스코프에 위치함.
//그러므로 y값 재설정.
console.log("for 돌린 후 전역 스코프 y =", y);
