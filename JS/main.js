const inputEl = document.querySelector("input");

// keydown - 키를 누를 때
// keyup - 키를 땔 때
inputEl.addEventListener("keydown", (e) => {
	console.log(e.key);
	if (e.key === "Enter") {
		console.log("엔터");
	}
	if (e.key === "Escape") {
		console.log("ESC");
	}
	if (e.key === " ") {
		console.log("스페이스");
	}
});
