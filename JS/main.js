// 콜백

const a = (callback) => {
	console.log("A");
	callback();
};
const b = () => {
	console.log("B");
};

a(b);
// "A"
// "B"

// ============================== //

function add(a, b, cb) {
	// 1초 뒤 실행
	setTimeout(() => {
		cb(a + b);
	}, 1000);
}
add(3, 7, (result) => {
	console.log(result);
});
