const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

// 삭제하기 위해서는 기명함수가 필요하다.
const handler = () => {
	console.log("부모");
};

parentEl.addEventListener("click", handler);
childEl.addEventListener("click", () => {
	parentEl.removeEventListener("click", handler);
});
