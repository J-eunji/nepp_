// 문제. 짝지어진 괄호에 따라 answer를 true, false로 표현하기
//

function solution(s) {
  var answer = true;
  var stack = [...s];
  if (stack[stack.length - 1] === "(") return (answer = false);
  if (stack.length % 2 !== 0) return (answer = false);
  else if (answer !== false) {
    var left = 0;
    var right = 0;
    arr.forEach((v) => {
      v === "(" ? left++ : right++;
      if (left < right) return (answer = false);
    });
  }
  return answer;
}

// 내 답 강사 피드백
function solution(s) {
  if (s[s.length - 1] === "(") return false; // answer 변수없이 바로 리턴해도 됩니다.
  if (s.length % 2 !== 0) return false;

  let left = 0; // 가급적 var 대신 let을 쓰는게 좋습니다.
  let right = 0;
  for (const v of s) {
    // 문자열을 바로 루프돌릴 수 있습니다.
    v === "(" ? left++ : right++;
    if (left < right) return false;
  }

  return left === right; // 마지막에 짝이 일치하는지 확인합니다.
}

// 강사 답 효율성
function solution(s) {
  var stack = [];

  for (const c of s) {
    if (c === "(") {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }
  return stack.length === 0;
}
