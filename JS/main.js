const numbers = ["12", "456", "132", "60", "1"];
const isValid = numbers.every((item) => item < 200);
console.log(isValid);

const users = [
	{ name: "현민", age: 18 },
	{ name: "200원", age: 200, email: "200@gmail.com" },
	{ name: "황현민", age: 19, email: "gyejeongjin@gmail.com" },
];
console.log(users.every((user) => user.email));
console.log(users.every((user) => user.age));
