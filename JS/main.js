const divEl = document.createElement("div");
divEl.textContent = "안녕하세요!";
divEl.classList.add("hello");
console.log(divEl);

const inputEl = document.createElement("input");
inputEl.value = "입력하세요!";
console.log(inputEl);

const buttonEl = document.createElement("button");
buttonEl.textContent = "버튼입니다!";
console.log(buttonEl);

// HTML body에 추가하기
document.body.append(divEl, inputEl, buttonEl);
