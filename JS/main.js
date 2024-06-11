const f = ["사과", "바나나", "체리"];
// 유사배열
const arrayLikeFruits = {
	0: "사과",
	1: "바나나",
	2: "체리",
	length: 3,
};

console.log(Array.isArray(f));
console.log(Array.isArray(arrayLikeFruits));
