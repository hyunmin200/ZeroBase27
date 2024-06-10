const h1El = document.querySelector("h1");

// 기명 함수 - function 이름() {}
function handler() {
	console.log(h1El.textContent);
}
h1El.addEventListener("click", handler);

// 익명 함수 - function () {}
h1El.addEventListener("click", function () {
	console.log(h1El.textContent);
});

// 이름있으면 기명 함수, 없으면 익명 함수
// 상황에 맞게 사용하면 된다.
