console.log(null?.abc);
console.log(undefined?.abc);

const el = document.querySelector("h1");
console.log(el?.textContent);

// const numbers = [1, 2, 3];
const number = null;
// 대괄호에서도 쓸 수 있다 ㄷㄷ
console.log(numbers?.[0]);

const user = {
	name: "200원",
	age: 22,
};
// const user = null;
console.log(user?.name);
