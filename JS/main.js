console.log(1);
console.log(2);
alert("확인");
console.log(3);
console.time("Loop!");
for (let i = 0; i < 10000000; i++) {}
console.timeEnd("Loop!");
console.log(4);
