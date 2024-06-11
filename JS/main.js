const numbers = ["12", "456", "132", "60", "1"];
const filterNumbers = numbers.filter((number) => number < 30);
console.log(filterNumbers);

const users = [
	{ name: "현민", age: 18 },
	{ name: "200원", age: 200, email: "200@gmail.com" },
	{ name: "황현민", age: 19, email: "gyejeongjin@gmail.com" },
];
const youngUsers = users.filter((user) => user.age < 30);
console.log(youngUsers);
const userWithEmail = users.filter((user) => user.email);
console.log(userWithEmail);
const userWithPhone = users.filter((user) => user.phone);
console.log(userWithPhone);
