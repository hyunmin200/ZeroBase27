const numbers = [17, 20, 199, 1, 40];
const isValid = numbers.some((number) => number > 200);
console.log(isValid);

const users = [
	{ name: "현민", age: 18 },
	{ name: "200원", age: 200, email: "200@gmail.com" },
	{ name: "황현민", age: 19, email: "gyejeongjin@gmail.com" },
];
console.log(users.some((user) => user.email));
console.log(users.some((user) => user.phone));
