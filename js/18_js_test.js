// 1.User 클래스 만들기 아이디값 (1,2,3,,,), 이름,나이
// 자기소개 메서드(인스턴스)
class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`안녕하세요. ${this.name}입니다.`);
  }
}

// 2.user01, 02, 03 만들고
let user01 = new User(1, "kaka", 9);
let user02 = new User(2, "kkamji", 13);
let user03 = new User(3, "meongu", 10);
//user01의 이름과 나이 비구조화 할당하기
// let {키값1, 키값2} = 객체 => 객체에 let {}안에 작성한 키 값이 있으면 변수에 할당
let { name, age } = user01;
console.log(name, age);

// 3. user01, 02, 03 객체 userArr 배열에 담고 각 User의 나이만 aggArr배열에 담기
let userArr = [user01, user02, user03];
let ageArr = userArr.map((user) => user.age);
console.log(ageArr);

// 4. id 2인 유저 삭제
userArr = userArr.filter((user) => user.id !== 2);
console.log(userArr);

// 5. id가 1인 유저의 나이 바꾸기
userArr = userArr.map((user) => {
  if (user.id === 1) {
    return { id: user.id, name: user.name, age: 50 };
  } else {
    return user;
  }
});
console.log(userArr);

// 삼항연산자와 객체 스프레드 활용한 업데이트
userArr = userArr.map((user) => (user.id === 1 ? { ...user, age: 100 } : user));
console.log(userArr);

// 6. 3초 뒤 "데이터"라는 값 resolve하는 프로미스를 반환하는 함수
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("데이터");
    }, 3000);
  });
}

getData().then(function (res) {
  console.log(res);
});

// 7. getData 함수의 전달값을 result에 할당하기.
async function setData() {
  let result = await getData();
  console.log(result);
}
setData();
