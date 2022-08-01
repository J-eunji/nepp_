// 스케줄링: 일정시간 후 특정 함수를 실행할 수 있는 스케줄을 관리
// => JS 자체는 동기적 언어, 브라우저가 스케줄링 도와줌

// 1. setTimeout(콜백함수, 시간(ms))
// 첫번째 인자의 콜백함수를 두번째 인자의 시간이 지난 후에 실행하는 스케줄을 추가
// => setTimeout의 실행결과로 Timeout 반환 => 스케줄 취소할 때 사용
let timeout = setTimeout(function () {
  console.log("실행");
  console.log(timeout); //3초 뒤
}, 3000);

// clearTimeout(타임아웃id)
// setTimeout의 실행결과로 받은 TimeoutId를 입력하면 해당 스케줄이 취소됨.
clearTimeout(timeout);

// 2. setInterval(콜백함수, 시간(ms))tj
// 첫번째 인자의 콜백함수를 두번째인자 시간(ms)마다 반복실행한다 (스케줄반복)
let intervalId = setInterval(function () {
  console.log("2초 경과");
}, 2000);

// clearInterval(인터벌id)
// setInterval의 실행결과로 받은 IntervalId 인자로 전달하면
// 해당 스케줄이 취소된다.
setTimeout(function () {
  // 10초 뒤에 스케줄 취소
  clearInterval(intervalId);
}, 10000);

// 동기: 실행결과 기다렸따가 다음 코드 실행
// => 코드를 순차적으로 실행
console.log("동기 처리는 이렇게");
console.log("순차적으로 실행이 됩니다.");

// 비동기: 실행결과 기다리지 않고 바로 다음코드 실행
let data;
setTimeout(function () {
  // 서버로부터 데이터 받는다고 가정
  data = 1;
}, 3000);
console.log(data);

function useCallback(callback, data) {
  setTimeout(function () {
    data = 1;
    // 3초 뒤에 데이터 받고 콜백
    callback(data);
  }, 3000);
}

function getData(data) {
  console.log(data);
}

// Promise : promise 객체 반환,
// 첫번째 인자로 콜백함수(성공시, 실패시)
// =>resole(값)가 되면 then(콜백함수(값)) 실행
// =>reject(에러)가 되면 catch(콜백함수(에러)) 실행
let count = 10;
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    count++;
    resolve(count);
    // reject(new Error());
  }, 3000);
});

promise
  .then(function (res) {
    console.log("성공");
  })
  .then(function (error) {
    console.log("에러");
  });

//f
function increase(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = num + 1;
      if (result > 10) {
        reject(new Error("숫자가 큽니다"));
      }
      console.log("resolve: ", result);
      resolve(result);
    }, 1000);
  });
}

increase(1)
  .then(function (num) {
    return increase(num);
  })
  .then(function (num) {
    return increase(num);
  })
  .then(function (num) {
    console.log(num);
  });

// resolve, reject 둘 다 함수, 성공/오류 매개변수
let getMovie = new Promise(function (resolve, reject) {
  // 일정 시간 뒤에 실행 setTimeout
  // 3초 뒤에 실행해달라고 하고 바로 빠져나가서 reject 실행
  setTimeout(function () {
    resolve("영화이름");
  }, 3000); // 3초 뒤 실행
  reject("영화가 없습니다.");
});

// reslove 했을때 값을 then에 넣어준다
getMovie
  .then(function (res) {
    console.log(res);
    //catch를 통해 error 처리하면 다음코드 실행이 잘 됨
  })
  .catch(function (error) {
    console.log(error);
  });

// song.then 1초 찍어서 콘솔창에 출력
// new Promise -> 프로미스 객체 만들기, 인자로 함수
// 이미지 받아올 때 등 비동기 처리로 이용함
// then / catch 메서드를 찍을 수 있다.
let song = new Promise((resolve, reject) => {
  // then의 첫번째 콜백함수로 전달된다.
  // resoleve가 되지 않으면 song.then 실행이 안됨
  setTimeout(function () {
    resolve("값");
  }, 3000);
  // catch의 첫번째 콜백함수로 전달된다.
  reject("error");
});

song
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });

function getSong() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Sneakers");
    }, 3000);
  });
}

// async : 함수 앞부분에 async 키워드 사용
// await : async 안에서 사용
// 서버에서 받아올 때 async 쓰면 편하다!
// Promise pendding이 끝날 때까지 기다려줌, 동기처럼 쓸 수 있음
async function printSong() {
  let result = await getSong();
  console.log("노래: ", result);
  // ascync의 return 값을 resoleve하는 Promise가 반환됨.
  return 1;
}
printSong();

async function printSong1() {
  try {
    let result = await getSong();
    // Promise가 pendding 끝날 때 까지 기다린다.
    // Promise가 resolve 값 반환
    console.log("노래1: ", result);
  } catch (e) {
    console.log(e);
  }
}

printSong1();

// 서버에 영화 요청
// => 응답 전에 참조 하면 undefined
// => 응답 후에 실행이 될 수 있게 하는 것: 비동기 처리
// setTimeout은 서버에서 데이터 오는 시간을 가정한 것
