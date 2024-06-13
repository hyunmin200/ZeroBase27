import { add, sub } from "./core/calculator.js";
import { getUserBirthYear } from "./core/user.js";
import { fruits, addFruits } from "./core/fruits.js";

console.log(add(2, 7));
console.log(sub(2, 7));

const thw = {
	name: "200원",
	age: 200,
};
const hhm = {
	name: "황현민",
	age: 19,
};
console.log(getUserBirthYear(thw));
console.log(getUserBirthYear(hhm));

addFruits("오렌지");
addFruits("망고");
console.log(fruits);
