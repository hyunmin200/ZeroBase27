// 인수(Argument)와 매개변수(Parameter)

// function add(a, b) {
// 	return a + b;
// }
// console.log(add(2, 1));
// console.log(add(7, 4));
// console.log(add("A", "B"));

// =================================== //

// 매개변수의 기본값(Default Value)
// function add(a, b = 1) {
// 	return a + b;
// }
// console.log(add(2));
// console.log(add(7, undefined)); // 위랑 같음
// console.log(add());

// =================================== //

// 나머지 매개변수(Rest Parameter)

function add(a, b, ...rest) {
	console.log(a, b, rest);
	return rest.reduce((acc, cur) => acc + cur, 0);
}
const res = add(1, 2, 3, 4, 5, 6, 7, 8);
console.log(res);
