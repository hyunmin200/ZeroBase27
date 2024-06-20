// 불필요한 데이터 참조를 피하세요!
const user = {
	name: "Neo",
	age: 85,
	emails: ["abc@gmail.com", "xyz@naver.com"],
};
const removedEmail = user.emails.splice(1, 1);
console.log(removedEmail);
console.log(user.emails);

// 불필요한 전역 변수 사용을 피하세요!
window.hello = "Hello world!";
window.thw = { name: "200won", age: 85 };

// 제거된 요소가 참조되지 않도록 주의하세요!
window.addEventListener("click", () => {
	const h1El = document.querySelector("h1");
	if (h1El) {
		console.log(h1El);
		h1El.remove();
	}
});

// 불필요한 타이머를 해제하세요!
let a = 0;
const intervalId = setInterval(() => {
	a += 1;
}, 100);
setTimeout(() => {
	console.log(a); // 10
	clearInterval(intervalId);
}, 1000);

// 불필요한 클로저를 제거하세요!
const getFn = (x) => {
	return (name) => {
		x += 1;
		console.log(x);
		return `Hello ${name}~`;
	};
};
const fn = getFn(0);
console.log(fn("Neo"));
console.log(fn("Lewis"));
fn("Evan");
fn("Amy");
