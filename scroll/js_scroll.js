// scroll: 스크롤바가 움직임.
// wheel : 마우스 휠을 조작.
// document, window => wheel 이벤트의 passive: true
// => passive false로 바꿔야 휠을 굴렸을 때 스크롤이 안움직임
// 즉, e.preventDefault가 정상 작동.
document.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
    console.log(e);
  },
  { passive: false }
);

let container = document.querySelector(".container");
let sectionList = document.querySelectorAll("section");

// 변수로 인덱스 저장 -> 휠 내릴 때 변화주기
// 휠 내릴 때마다 다음 섹션 이동
let index = Math.round(scrollY / innerHeight);

// 스크롤 중인지
let isScrolling = false; //setTimeout
// 변수로 인덱스 저장 => 휠을 내릴 때마다 변수에 변화 주기
container.addEventListener("wheel", function (e) {
  e.preventDefault();
  // deltaY : 휠내릴때 100, 올릴때 -100
  // window.scrollTo: 스크롤 위치 지정한 값으로 이동(절대좌표)
  if (isScrolling) return;

  isScrolling = true;

  setTimeout(function () {
    isScrolling = false;
  }, 500);

  // e.deltaY => 휠 내릴 때 양수, 올릴 때 음수
  if (e.deltaY > 0) {
    //첫 섹션에서 값 그만 감소
    index < sectionList.length - 1 ? index++ : false;
  } else {
    //마지막 섹션에서 값 그만 증가
    index > 0 ? index-- : false;
  }
  window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
});

// window.addEventListener("scroll", function (e) {
//   console.log(this.pageYOffset, this.innerHeight * idx);
// });

// 버튼 클릭시 스크롤 이동
let btns = document.querySelectorAll(".btns .btnSec");
let big = document.querySelector(".big");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    index = idx;
    move();
  });
});

function move() {
  window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
  btns.forEach((btn, idx) => {
    index === idx ? btn.classList.add("big") : btn.classList.remove("big");
  });
}

// 화면 지나갈 때마다 버튼 커지는 효과
// 새로고침하면 더 많이 보이는 화면을 보여줌
window.addEventListener("scroll", function () {
  index = Math.round(scrollY / innerHeight);
  btns.forEach((btn, idx) => {
    index === idx ? btn.classList.add("big") : btn.classList.remove("big");
  });
});

move();

// 스크롤을 움직였을 때 scrollY의 위치가 더 많이 보이는 곳.
