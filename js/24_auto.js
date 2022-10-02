function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const letter of word) {
      // current에 학습할 문자열이 없다면
      if (!current[letter]) {
        // current(객체)에 값을 넣는다.
        // current = {letter: [학습된 단어 갯수, 트리구조 이용할 노드 값]}
        current[letter] = [0, {}];
      }
      // 학습된 단어 갯수 = 1 + (학습된 단어 갯수가 false면 0)
      current[letter][0] = 1 + (current[letter][0] || 0);
      current = current[letter][1];
    }
  }

  return root;
}

function solution(words) {
  let answer = 0;
  const trie = makeTrie(words); // Trie 자료구조를 만들어준다.

  for (const word of words) {
    // 입력받은 수 만큼 루프
    let count = 0; // 카운팅을 위한 변수
    let current = trie; // 루트부터 시작
    for (const [index, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) {
        // 단어가 하나 이하로 남을 경우 종료
        break;
      }
      current = current[letter][1]; // 다음 노드로 이동
    }
    answer += count; // 카운팅을 더해준다
  }

  return answer; // 반환
}

console.log(solution(["go", "gone", "guild"]));
