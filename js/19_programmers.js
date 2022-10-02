// function solution(board, moves) {
//   var answer = 0;
//   var outDolls = [];
//   moves.map((move) =>
//     board.map((list) => {
//       if (list[move - 1] !== 0) {
//         if (move !== 0) {
//           outDolls.push(list[move - 1]);
//           list[move - 1] = 0;
//           move = 0;
//         }
//       }
//     })
//   );

//   while (outDolls.length !== 0) {
//     let del = [];
//     outDolls.map((doll, idx) => {
//       if (doll === outDolls[idx + 1]) {
//         answer += 2;
//         del = outDolls.splice(idx, 2);
//       }
//     });
//     if (del.length === 0) break;
//   }
//   return answer;
// }

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// );

// function solution1(d, budget) {
//   var answer = 0;
//   var sum = 0;
//   for (i = 0; i < d.length; i++) {
//     if (d[i] > d[i + 1]) {
//       d.push(d[i]);
//       d.splice(i, 1);
//       i = 0;
//     }
//   }
//   d.map((a) => {
//     sum += a;
//     if (budget >= sum) answer++;
//   });

//   return answer;
// }

// console.log(solution1([1, 3, 2, 5, 4], 9));
// console.log(solution1([2, 2, 3, 3], 10));

// function solution2(numbers) {
//   var answer = 0;
//   for (i = 0; i < 10; i++) {
//     if (numbers.indexOf(i) === -1) {
//       answer += i;
//     }
//   }
//   return answer;
// }

// console.log(solution2([1, 2, 3, 4, 6, 7, 8, 0]));

// function solution3(arr1, arr2) {
//   var answer = [];
//   var answerin = [];
//   arr1.forEach((a, i) => {
//     a.forEach((b, j) => {
//       answerin = [...answerin, arr1[i][j] + arr2[i][j]];
//     });
//     answer = [...answer, answerin];
//     answerin = [];
//   });
//   return answer;
// }
// console.log(
//   solution3(
//     [
//       [1, 2],
//       [2, 3],
//     ],
//     [
//       [3, 4],
//       [5, 6],
//     ]
//   )
// );

// function solution4(arr) {
//   var answer = 0;
//   arr.map((a) => (answer += a));
//   answer = answer / arr.length;
//   return answer;
// }

// console.log(solution4([1, 2, 3, 4]));

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// str에 나타나는 숫자 중 최소값과 최대값을 찾아
// 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

function solution5(s) {
  var answer = "";
  s = s.split(" ").map(Number);
  var min = s[0];
  var max = s[0];
  s.forEach((num) => {
    if (min > num) min = num;
    else max = num;
  });
  s = [];
  s.push(min.toString(), max.toString());
  answer = s.join(" ");
  return answer;
}
console.log(solution5("1 2 3 4"));

function solution6(n) {
  var answer = [[]];
  var arr = [];
  var circle = 0;
  for (i = 1; i <= n; i++) {
    arr.push([i, 0, 0]);
  }
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < 3; j++) {
      if (arr[i][j] < arr[i + 1][j])
        if (arr[i][j] !== 0) {
          circle = arr[i].splice(j, 1, 0).join("");
          if (arr[arr.length - 1 - i][-j] === 0)
            arr[arr.length - 1 - i].splice(-j, 1, circle);
        }
      console.log(arr);
      console.log(circle);
    }
  }
  console.log(arr);
  return arr;
}

console.log(solution6(2));
