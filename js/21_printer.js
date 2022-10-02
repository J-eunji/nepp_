// 프린터
// 중요도에 따라 맨 앞에 있는게 우선순위 아니면 맨 뒤로
// (중요도, 위치인덱스)
// return 몇 번째로 인쇄되는지

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueu(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
  return count;
}

// function solution(priorities, location) {
//   var front = 1;
//   var rear = 1;

//   priorities.forEach((_, i) => {
//     if (location > i) {
//       if (priorities[location] <= priorities[i]) {
//         front++;
//         rear++;
//       }
//     } else if (location < i) {
//       if (priorities[location] == priorities[i]) {
//         if (front < rear) {
//           rear++;
//         }
//       } else if (priorities[location] < priorities[i]) {
//         rear++;
//       }
//     }
//   });
//   return rear;
// }

// console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([3, 1, 1, 9, 1, 1, 5], 1));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));

// 강사 답
