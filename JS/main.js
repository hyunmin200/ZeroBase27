const numbers = [17, 20, 199, 60, 31];
numbers.every((num, idx) => {
	console.log(num, idx);
	return true;
});
numbers.filter((num, idx) => {
	console.log(num, idx);
	return true;
});
numbers.reduce((acc, cur, idx) => {
	console.log(acc, cur, idx);
	return acc + cur;
}, 0);
