const numbers = [10, 19, 29, 13, 120, 123];

let sum1 = 0;
numbers.forEach((number) => {
	sum += number;
});
console.log(sum);

// number가 배열안에 값, accumulator가 누적값
const sum2 = numbers.reduce((accumulator, number) => {
	return accumulator + number;
}, 0); // 콜백 함수, 초기값
console.log(sum2);

const users = [
	{ name: "현민", age: 18 },
	{ name: "200원", age: 200, email: "200@gmail.com" },
	{ name: "황현민", age: 19, email: "gyejeongjin@gmail.com" },
];
const sum3 = users.reduce((acc, user) => acc + user.age, 0);
console.log(sum3);
