const data = {
	string: "123",
	number: 123,
	boolean: true,
	null: null,
	undefined: undefined,
	array: [1, 2, 3],
	object: { a: 1, b: 2, c: 3 },
	function: function () {},
};

// typeof 사용하기
console.log("typeof 데이터");
console.log(typeof data.string === "string");
console.log(typeof data.number === "number");
console.log(typeof data.boolean === "boolean");
console.log(typeof data.null === "object");
console.log(typeof data.undefined === "undefined");
console.log(typeof data.array === "object");
console.log(typeof data.object === "object");
console.log(typeof data.function === "function");
// null, array, object 빼고는 잘 확인이 된다. (간단히 사용할 때, 유용함)

// constructor 사용하기
console.log("데이터.constructor");
console.log(data.string.constructor === String);
console.log(data.number.constructor === Number);
console.log(data.boolean.constructor === Boolean);
// console.log(data.null.constructor); // Error
// console.log(data.undefined.constructor); // Error
console.log(data.array.constructor === "object");
console.log(data.object.constructor === "object");
console.log(data.function.constructor === "function");
