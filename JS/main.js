// for of 문
// for (const 아이템변수 of 배열) {}
const fs = ["사과", "바나나", "체리"];
for (let i = 0; i < fs.length; i += 1) {
	const f = fs[i];
	console.log(f);
}
for (const f of fs) {
	if (f === "체리") {
		continue;
	}
	console.log(f);
}
