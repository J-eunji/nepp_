// 객체: 여러 데이터를 상태로 가지는 데이터
// 프로퍼티: key : value => key도 식별자 이름 규칙에 따라 작성
// key 이름으로 숫자도 가능.
// 없는 key 값을 쓰면 (객체.새메서드()=몇) 새로운 key값 할당
//
let dog = {
  age: 9,
  name: "kaka",
};

console.log(dog.age);

// 메서드: 객체의 프로퍼티값으로 지정된 함수
// 메서드 호출 => 객체.메서드()

let dog2 = {
  age: 1,
  name: "solbam",
  bow: function () {
    console.log("멍멍!");
  },
};

dog2.bow();

// this: 메서드를 호출한 객체
// 객체.메소드 로 사용 (ex this.name)
let cat = {
  age: 10,
  name: "meongu",
  greeting: function () {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
  },
};

cat.greeting();

let dog3 = {
  age: 3,
  name: "norang",
  greeting: function () {
    console.log(`안녕하세요. 저는 ${this.name}입니다.`);
  },
};

dog3.greeting();

let rect = {
  width: 100,
  height: 100,
  getArea: function () {
    console.log(this.width * this.height);
  },
};

rect.getArea();

// 메서드 내부에서 함수 실행시 this 실행X
// 화살표 함수는 this가 없기 때문에 상위 함수의 this를 찾아감
let obj = {
  name: "kaka",
  outer: function () {
    console.log("outer 실행");
    // 일반 함수
    function inner() {
      console.log("inner 실행");
      console.log(this.name);
    }
    inner();
  },
};

obj.outer();

// 화살표 함수는 this가 없기 때문에 상위 함수의 this를 찾아감
let obj1 = {
  name: "kaka",
  outer: function () {
    console.log("outer 실행");
    // 화살표 함수
    let inner = () => console.log(this.name);
    inner();
  },
};

obj1.outer();

//문제_ 삼각형 객체 만들기
let triangle = {
  width: 10,
  height: 6,
  getArea: function () {
    (this.width * this.height) / 2;
    console.log(
      `너비가 ${this.width}이고 높이가 ${this.height}인 삼각형의 넓이는 ${
        (this.width * this.height) / 2
      }입니다.`
    );
  },
};

triangle.getArea();

//문제_자동차 객체 => 연비와 연료
//obj.name = "minseok" => obj의 name 재할당
// => 갈 수 있는 거리 구하는 메서드 연료*연비=거리
// => 심화. 매개변수를 통해 이동거리 출력하는 메서드(연료 줄이기)
// car(32) 이동거리는 32, 연료는 어쩌구 남았습니다.

let car = {
  mileage: 16,
  fuel: 20,
  distance: function () {
    this.mileage * this.fuel;
  },
  move: function (distance) {
    this.fuel = this.fuel - distance / this.mileage;
    console.log(`${distance}km 이동, 남은연료: ${this.fuel}`);
  },
};

car.move(10);
car.move(16);
