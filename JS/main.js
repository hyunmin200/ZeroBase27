const numbers = ["12", "456", "132", "60", "1"];
numbers.forEach((number) => {
	console.log(number);
});

let sum = 0;
numbers.forEach((number) => {
	sum += number;
});
console.log("합계: ", sum);

for (const number of numbers) {
	if (number > 100) {
		break;
	}
	console.log(number);
}
