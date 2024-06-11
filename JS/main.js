const date1 = new Date();
const date2 = Date.now();

console.log(date1);
console.log(date1.getTime());
console.log(date2);

setTimeout(() => {
	console.log(Date.now() - date2);
}, 1000);
