// 호이스팅(Hoisting)
hello(); // OK!
world(); // Error..

// 함수 선언문(Declaration)
function hello() {
	console.log("Hello~");
}

// 함수 표현식(Expression)
const world = function () {
	console.log("World");
};
