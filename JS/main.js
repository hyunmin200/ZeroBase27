// <a> 태그에서 페이지 이동 방지!
const anchorEl = document.querySelector("a");
anchorEl.addEventListener("click", (e) => {
	e.preventDefault();
});

// 마우스의 휠의 스크롤 동작 방지!
const parentEl = document.querySelector(".parent");
parentEl.addEventListener("wheel", (e) => {
	e.preventDefault();
});
