const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
// 원본 객체 변함
// const result = Object.assign(target, source1, source2);
// console.log(target);
// console.log(result);

// 원본 객체 변하지 않음
const result = Object.assign({}, target, source1, source2);
console.log(target);
console.log(result);

const userA = {
	name: "200원",
	age: 200,
};
const userB = {
	age: 22,
	email: "gyejeongjin@gmail.com",
	isValid: true,
};
// const thw = Object.assign(userA, userB);
const thw = Object.assign({}, userA, userB);

console.log(thw);
console.log(userA);
