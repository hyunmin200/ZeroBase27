const parentEl = document.querySelector(".parent");
const childEls = document.querySelectorAll(".child");

childEls.forEach((childEl) => {
	// click - 클릭했을 때,
	// dblclick - 더블 클릭했을 때
	childEl.addEventListener("click", () => {
		childEl.classList.toggle("active");
	});

	// contextmenu - 우클릭 했을 때
	childEl.addEventListener("contextmenu", (e) => {
		e.preventDefault();
		console.log(childEl.textContent);
	});
});

// mousedown - 버튼을 누를 때
// mouseup - 버튼을 땔 때
// mouseenter - 포인터가 요소로 들어갈 때
// mouseleave - 포인터가 요소에서 나올 때
parentEl.addEventListener("mousedown", () => {
	parentEl.classList.add("active");
});
parentEl.addEventListener("mouseup", () => {
	parentEl.classList.remove("active");
});

// mousemove - 포인터가 움직일 때
parentEl.addEventListener("mousemove", (e) => {
	// console.log(e.x, e.y);
});

parentEl.addEventListener("wheel", (e) => {
	// console.log("Parent Wheel");
});
