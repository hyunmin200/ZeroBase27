const numbers = [17, 20, 100, 5, 200];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);
console.log(numbers);

const fruits = ["apple", "banana", "cherry"];
const capitalizedFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(capitalizedFruits);
console.log(fruits);

const users = [
	{ name: "현민", age: 18 },
	{ name: "200원", age: 200, email: "200@gmail.com" },
	{ name: "황현민", age: 19, email: "gyejeongjin@gmail.com" },
];

const userEmails = users.map((user) => user.email);
console.log(userEmails);
console.log(userEmails.filter((email) => email));

const f = ["사과", "바나나", "체리"];
const UpperF = f.map((e, i) => {
	console.log(i);
});
