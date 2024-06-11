const fruits = ["Apple", "Banana", "Cherry"];
// 유사배열
const arrayLikeFruits = {
	0: "Apple",
	1: "Banana",
	2: "Cherry",
	length: 3,
};
console.log(fruits);
console.log(arrayLikeFruits);

console.log(fruits[1]);
console.log(arrayLikeFruits[1]);

console.log(fruits.length);
console.log(arrayLikeFruits.length);

console.log(Array.isArray(fruits));
console.log(Array.isArray(arrayLikeFruits));

console.log(fruits.map((fruit) => fruit.toUpperCase()));
console.log(fruits.from(arrayLikeFruits).map((fruit) => fruit.toUpperCase()));
