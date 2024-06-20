function a() {
	console.log("A");
	function b() {
		setTimeout(() => {
			console.log("B1");
			console.log("B2");
		}, 0);
	}
	b();
}
function c() {
	console.log("C");
}
function first() {
	a();
	c();
}
function second() {
	c();
}
first();
second();
