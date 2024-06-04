// 함수 선언문(Declaration)
function add(a, b) {
	// console.log(a);
	// console.log(b);
	return a + b;
}

console.log(add);
console.log(add(1, 2));
console.log(add(31, 14));
console.log(add(5, 8));

// 함수 표현식
const sub = function (a, b) {
	return a - b;
};

console.log(sub);
console.log(sub(2, 1));
console.log(sub(14, 10));
console.log(sub(8, 5));
