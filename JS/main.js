const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");
const anchorEl = document.querySelector("a");

window.addEventListener("click", () => {
	console.log("윈도우");
});
document.documentElement.addEventListener("click", () => {
	console.log("HTML");
});
document.body.addEventListener(
	"click",
	() => {
		console.log("body");
	},
	{ capture: true },
);
parentEl.addEventListener("click", (e) => {
	console.log("parent");
	// e.stopPropagation(); // 버블링 정지!
});
childEl.addEventListener("click", () => {
	console.log("child");
});
anchorEl.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("a");
});
