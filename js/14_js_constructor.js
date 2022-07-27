// 객체 리터럴을 이용한 객체 생성.
// 장점: 보기가 쉽다.
// 단점: 유지보수 어려움. 코드가 길어진다.
let user = {
  nickname: "kaka",
  age: 9,
  email: "kaka@gmail.com",
  send: function (message) {
    console.log(`${this.nickname}: ${message}`);
  },
};

let user02 = {
  nickname: "meongu",
  age: 10,
  email: "meongu@gmail.com",
  send: function (message) {
    console.log(`${this.nickname}: ${message}`);
  },
};

user.send("안녕하세요!");
user02.send("반갑습니다.");

// 생성자(Constructor) 함수: 미리 틀을 만들어 놓음
// 파스칼케이스로 작성
// this.프로퍼티 = 값; 을 통해 생성될 객체의 상태(프로퍼티) 미리 설정
// => 자동차 공장의 자동차 틀 혹은 설계도

//인스턴스: 실제로 생성된 객체로 메모리 실제로 할당
// => 자동차 공장에 실제로 만들어진 자동차 제품
// ex. 자동차마다 다른 색.크기.최대속도

function User(nickname, age, email) {
  this.nickname = nickname;
  this.age = age;
  this.email = email;
  this.send = function (message) {
    console.log(`${this.nickname}: ${message}`);
  };
}

// 생성자 함수 앞에 new 추가
let user03 = new User("kaka", 9, "kaka@gmail.com");
let user04 = new User("meongu", 10, "meongu@gmail.com");
console.log(user03, user04);
user03.send("ㅎㅇ");

//문제_ 자동차 객체를 만들어내는 생성자 함수 만들기

function Car(color, speed, fuel, mileage) {
  this.color = color;
  this.speed = speed;
  this.fuel = fuel;
  this.mileage = mileage;
  this.distance = function (km) {
    this.fuel -= km / this.mileage;
    console.log(`이동거리: ${km}km, 남은 연료량: ${this.fuel}`);
  };
}

let car01 = new Car("black", 60, 20, 13);
console.log(car01);
console.log(car01.distance(60));

// 프로토타입 : 프로토타입은 객체에 프로퍼티와 메서드 상속
// => 프로토타입에 프로퍼티와 메서드를 정의하면 인스턴스(객체)에서 참조 및 호출
// => 프로토타입 프로퍼티와 메서드를 인스턴스에 상속
// => 상속 받는 객체에서만 사용 가능 => 생성자에서 호출X
Car.prototype.changeColor = function (color) {
  this.color = color;
};
car01.changeColor("gray"); // undefined
console.log(car01);

// 정적(static) 프로퍼티와 메서드
// => 생성자에서 참조할 수 있는 프로퍼티 및 메서드
// => 생성자에서만 호출 가능

// JS 내에서 생성자 함수의 정적 메서드 사용
console.log(Object.entries(car01));
console.log(Number.parseInt(1.0123231));

// Car 객체의 move => 프로토타입 메서드
Car.prototype.move02 = function (km) {
  this.fuel -= km / this.distance;
  console.log(`이동거리: ${km}, 남은 연료: ${this.fuel}`);
};

// 프로토타입 상속
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.cry = function () {
  console.log(this.sound);
};

function Dog(name, age) {
  //this 바인딩
  //Animal 호출하지만 this가 dog를 가리킴
  Animal.call(name, age);
}

function Cat(name, age) {
  //this 바인딩
  //Animal을 호출하지만 this가 cat을 가리키게 함
  //new cat(이름, 나이) => new animal(이름, 나이) => this가 Animal이 아니라 Cat 가리킴
  Animal.call(name, age);
}

// function Dog() {
//   this.sound = "왁왁";
// }
// function Cat() {
//   this.sound = "먁";
// }

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

let dog = new Dog("kaka", 9);
let cat = new Cat("meongu", 10);

dog.cry(); // undefined
cat.cry(); // undefined
console.log(dog, cat);

// 클래스 정의
// class 키워드와 함께 정의
// 생성자 함수와 다르게 () 쓰지 않음
class Phone {
  // 인스턴스 값 초기화
  // 클래스를 호출할 떄 전달되는 인자를 constructor 함수의 매개변수로 받음
  // 초기화할 값이 없다면 생략 가능
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  // 축약형: function 키워드 생략
  // 프로토타입 메서드가 됨
  powerOn() {
    console.log("전원이 켜졌습니다.");
  }

  // 정적(static) 메서드
  // 생성자를 통해서만 호출 가능
  static powerOff() {
    console.log("전원이 꺼졌습니다.");
  }
}

let galaxy = new Phone("Galaxy s22", "white");
console.log(galaxy);
galaxy.powerOn();
Phone.powerOff();

// Player 클래스 => nickname, email, class(직업)
// 공격하는 메서드(프로토타입), "player입니다."(정적메서드)

class Player {
  constructor(nickname, job, type) {
    this.nickname = nickname;
    this.job = job;
    this.type = type;
  }
  attack(target) {
    console.log(`${this.nickname}: 짖기!`);
    target.getAttack();
  }
  getAttack() {
    console.log(`${this.nickname} : 물기!`);
  }
  static hello() {
    console.log("player 입니다.");
  }
  static isPlayer(obj) {
    // 전달받은 obj이 Player의 인스턴스인지 확인 가능.
    return obj instanceof Player;
  }
}

let kaka = new Player("kaka", "superman", "dog");
console.log(kaka);
// kaka.attack();
Player.hello();

let meongu = new Player("meongu", "batman", "cat");
console.log(meongu);
// meongu.attack();
Player.hello();

console.log(Player.isPlayer(kaka));
console.log(Player.isPlayer(dog));

kaka.attack(meongu);
