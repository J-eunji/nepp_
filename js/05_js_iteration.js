/*
for문: 반복문
종료시점 제어
*/
for (var i = 0; i < 3; i++) {
  console.log(i * 2);
}

/* 
while문: 반복문
반복횟수가 불확실할 때 사용
조건식이 true일 때 반복 실행 -> false면 자동 종료
while(true) 무한루프, break로 종료
*/

var num = 3;
while (num > 0) {
  console.log(`${num}은(는) 양수입니다.`);
  num--;
}

var num02 = 10;
while (num02 > 0) {
  if (num02 < 7) break;
  console.log(`${num02}은(는) 양수입니다.`);
  num02--;
}

//
// do {
//   console.log("실행");
// } while (num03 > 10);

// 객체가 몇 개 인지 알 수 없을 때
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
while (true) {
  console.log(count);
  if (count > arr.length) break;
  count++;
}

//문제_ 구구단 2단 반복문으로 출력
var num04 = 2;
for (i = 1; i <= 9; ) {
  console.log(`${num04} * ${i} = ${num04 * i}`);
  i++;
}

//문제_ 구구단 2-9단 반복문으로 출력
var num05 = 2;
for (num05 = 2; num05 <= 9; ) {
  for (i = 1; i <= 9; ) {
    console.log(`${num05} * ${i} = ${num05 * i}`);
    i++;
  }
  num05++;
}

//문제_ 10이하의 짝수만 출력
//continue -> true인 값을 생략함
for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}
