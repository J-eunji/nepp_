let input = document.querySelector(".inputBox input");
let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector(".todoList");

todoForm.addEventListener("submit", function (e) {
  // 이벤트의 기본 동작을 막는다.
  e.preventDefault();
  // input 값이 빈 문자열이면 함수 종료
  if (input.value === "") return;
  // .todoList 글씨 추가해보기
  let todoItem = document.createElement("li");
  let todoText = input.value;
  // let todoText = document.createTextNode(input.value);
  // // todoItem.appendChild(addText);
  // let icon = document.createElement("i");
  // // icon.className = "xi-trash";
  // let iconBox = document.createElement("div");
  // // iconBox.className = "btnDel";
  // // iconBox.appendChild(icon);
  // // todoItem.appendChild(iconBox);
  // // todoList.appendChild(todoItem);

  // innerHTML
  console.log(todoText);
  todoItem.innerHTML = `
    ${todoText}
    <div class = "btnDel">
      <i class="xi-trash"></i>
    </div>
    `;
  todoList.appendChild(todoItem);
  input.value = "";
});

// 이벤트 위임 처리
let check = document.querySelector(".check");
todoList.addEventListener("click", function (e) {
  if (e.target.matches(".todoList li")) e.target.classList.toggle("check");
  else if (e.target.matches(".btnDel .xi-trash")) {
    let parents = e.target.parentNode.parentNode;
    parents.remove();
  }
});
localStorage.setItem("todo", "테스트");
