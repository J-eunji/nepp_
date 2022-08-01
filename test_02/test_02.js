let btnSide = document.querySelector(".btnSide");
let gnb = document.querySelector("#gnb");

btnSide.addEventListener("click", function () {
  gnb.classList.add("on");
});

// 회색영역 클릭시 사라지게
gnb.addEventListener("click", function (e) {
  // 이벤트 실제 발생 타겟 === 이벤트 등록된 타겟
  if (e.target === e.currentTarget) {
    gnb.classList.remove("on");
  }
});

// 슬라이더 구현
let pagination = document.querySelector(".pagination");
let slideWrapper = document.querySelector(".slideContainer ul");
let slideImgList = document.querySelectorAll(".slideContainer .slideImg");
let slideImgLength = slideImgList.length;

//늘린 슬라이드 부모너비 계산
slideWrapper.style.width = 100 * slideImgList.length + "vw";

//슬라이드 갯수만큼 버튼 늘리기
// for (let i = 0; i < slideImgList.length; i++) {
//   let btnElem = document.createElement("button");
//   let textNode = document.createTextNode(i + 1);
//   pagination.appendChild(btnElem);
//   btnElem.appendChild(textNode);
// }

slideImgList.forEach(function (_, i) {
  let btnElem = document.createElement("button");
  let textNode = document.createTextNode(i + 1);
  pagination.appendChild(btnElem);
  btnElem.appendChild(textNode);
});

// slideImgList.forEach(function slide(_, i) {
//   pagination.innerHTML += `<button>${i + 1}</button>`;
// })

//슬라이드 구현
let btnSlideList = document.querySelectorAll(".pagination button");

btnSlideList.forEach(function (btn, idx) {
  // translate는 왼쪽을 기준으로 움직인다.
  // 축을 기준으로 0, -100, -200 만큼 움직인다.
  btn.addEventListener("click", function () {
    slideWrapper.style.transform = `translate(${idx * -100}vw)`;
  });
});

//모달창 닫기
let modalBg = document.querySelector(".modalBg");
let modal = document.querySelector(".modal");
let modalClose = document.querySelector(".btnClose");
modalClose.addEventListener("click", function () {
  modalBg.classList.add("hide");
});

//모달창 닫기 간단
// modalClose.addEventListener("click", function() {
//   modalBg.style.display = none;
// })
