console.log(Math.random());

// 원하는 범위의 랜덤값 뽑기
function Random(min = 0, max = 10) {
	return Math.floor(Math.random() * (max - min)) + min;
}

console.log(Random()); // 0~9
console.log(Random(0, 100)); // 0~99
console.log(Random(101, 200)); // 101~199
