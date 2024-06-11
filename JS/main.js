// 콜백을 호출하는 타이머 설정
// const timeout = setTimeout(() => {
// 	console.log("Hello~");
// }, 5000);

// 타이머를 취소
// const btnEl = document.querySelector("button");
// btnEl.addEventListener("click", () => {
// 	console.log("타이머 취소");
// 	clearTimeout(timeout);
// });

// 콜백을 반복 호출하는 타이머 설정
const timeout = setInterval(() => {
	console.log("Hello~");
}, 3000);

// 타이머를 취소
const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
	console.log("타이머 취소");
	clearInterval(timeout);
});
