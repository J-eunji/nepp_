// function solution(cards) {
//   cards.sort((a, b) => a - b);
//   while (true) {
//     if (cards[0] === cards[1]) cards.splice(0, 2);
//     else return cards[0];
//   }
// }

// console.log(solution([1, 3, 2, 2, 5, 5, 1]));

// 퀘스트 수 n개, 퀘스트 선행관계 배열 quests
// 클리어할 순서를 return

// function solution(n, quests) {
//   let first = quests.map((quest) => quest[0]);
//   let second = quests.map((quest) => quest[1]);

//   for (let i = 0; i < second.length; i++) {
//     for (let j = 0; j < first.length; j++) {
//       if (first.indexOf(second[i]) !== -1) {
//         first.splice(first.indexOf(second[i]), 1);
//       }
//     }
//   }

//   let answer = [...first, ...second];

//   for (i = 0; i <= answer.length; i++) {
//     for (j = 0; j <= answer.length; j++) {
//       if (i < j) {
//         if (answer[i] === answer[j]) {
//           answer.splice(i, 1);
//         }
//       }
//     }
//   }

//   for (i = 1; i <= n; i++) {
//     if (answer.indexOf(i) === -1) answer.splice(i - 1, 0, i);
//   }
//   return answer;
// }

function solution(n, quests) {
  // 우선 순위 퀘스트
  for (i = 0; i < quests.length; i++) {
    for (j = 0; j < quests.length; j++) {
      if (quests[i][0] === quests[j][1]) {
        quests.splice(i, 0, j);
        quests.splice(j, 1);
      }
    }
  }

  let answer = [...quests[0], ...quests[1]];

  for (i = 0; i <= answer.length; i++) {
    for (j = 0; j <= answer.length; j++) {
      if (i < j) {
        if (answer[i] === answer[j]) {
          answer.splice(j, 1);
        }
      }
    }
  }

  for (i = 1; i <= n; i++) {
    if (answer.indexOf(i) === -1) answer.splice(i - 1, 0, i);
  }
  return answer;
}

console.log(
  solution(8, [
    [1, 3],
    [1, 4],
    [3, 5],
    [5, 4],
    [8, 1],
  ])
);
