const parentEl = document.createElement(".parent");

const divEl = document.createElement("div");
divEl.textContent = "새로운 요소!";

const inputEl = document.createElement("input");

const res1 = parentEl.prepend(new Comment(" 새로운 주석 "));
const res2 = parentEl.append(divEl, "새로운 텍스트");
const res3 = (parentEl.appendChild(inputEl).placeholder = "값을 입력하세요!");

console.log(res1, res2);
console.log(res3);
