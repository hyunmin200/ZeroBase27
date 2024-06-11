const numbers = ["12", "456", "132", "60", "1"];
const foundNumbers = numbers.find((number) => number < 30);
console.log(foundNumbers);

const users = [
	{ name: "현민", age: 18 },
	{ name: "200원", age: 200, email: "200@gmail.com" },
	{ name: "황현민", age: 19, email: "gyejeongjin@gmail.com" },
];
const foundUser = users.find((user) => !user.email);
console.log(foundUser);
