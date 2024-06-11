function sayHi(name) {
	return `Hi, ${name}`; // return시 함수는 종료된다.
	console.log("동작하지 않음");
}
const h = sayHi("200woni"); // 반환
console.log(h); // "Hi, 200woni"

console.log(sayHi("200woni")); // "Hi, 200woni"
//===============================================//
function a() {
	// return // undefined
}
function b() {
	return; // undefined
}
function c() {
	return undefined;
}

console.log(a()); // undefined
console.log(b()); // undefined
console.log(c()); // undefined

// 결국 3가지가 다 똑같은 명시하느냐 안하느냐의 차이
