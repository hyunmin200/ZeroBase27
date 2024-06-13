const formEl = document.querySelector("#login");
const inputEls = document.querySelectorAll("input");

inputEls.forEach((el) => {
	// focus(focusin) - 요소가 포커스를 얻었을 때
	el.addEventListener("focus", () => {
		formEl.classList.add("active");
	});
	// blur(focusout) - 요소가 포커스를 잃었을 때
	el.addEventListener("blur", () => {
		formEl.classList.remove("active");
	});
	// input - 값이 변경되었을 때
	// change - 상태가 변경되었을 때
	el.addEventListener("input", (e) => {
		console.log(e.target.value);
	});
});

// submit - 제출 버튼을 선택했을 때
formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = {
		id: e.target[0].value,
		pw: e.target[1].value,
	};
	// fetch(https://....)
	console.log("서버로 제출했습니다.");
});

// reset - 리셋 버튼을 선택했을 때
formEl.addEventListener("reset", () => {
	console.log("모든 값이 초기화되었습니다.");
});
