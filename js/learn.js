function makeFun() {
    var name = "Foo", //지역변수 name
        count = 0; //지역변수 count
    function displayName() {
        console.log(name, "count", count++);
    }
    return displayName;
}
makeFun(); //function:displayName (지역변수 name, count)
var myFn = makeFun(); //함수 리턴, name/count가 전역변수가 됨, makeFun()이 myFn()의 전역이 되는 건가..?
myFn(); //클로저, display의 리턴값; Foo count 0
myFn(); //Foo count 1: 복사되지 않고 환경변수처럼 사용됨

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
console.log(add5(2));
var add10 = makeAdder(10);
console.log(add10(5));

function f1() {
    return this;
}

console.log(`f1() this === global : ${f1() === global}`);

var obj = {
    attr: 10,
    fn: function () {
        console.log("this.Attr: " + this.attr);
    },
};

console.log(obj.fn());
console.log(obj.fn.call(global));

var title = "환영합니다.";
var house = {
    title: "집이예요~",
    room: {
        title: "방입니다.",
        getTitle: function () {
            return this.title;
        },
    },
};
var fn1 = house.room.getTitle;
console.log(fn1());
