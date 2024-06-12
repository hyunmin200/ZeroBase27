const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

parentEl.addEventListener("click", () => {
	console.log("부모");
});

childeEl.addEventListener("click", () => {
	console.log("자식");
});

// 이벤트 버블링 발생
