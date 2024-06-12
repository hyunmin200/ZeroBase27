const el = document.querySelector("#apple");

// 개별 지정 할 수 있다.
el.style.width = "100px";
el.style.fontSize = "20px";
el.style.backgroundColor = "green";
el.style.position = "absolute";

// 한 번에 지정할 수 있습니다.
Object.assign(el.style, {
	width: "100px",
	fontSize: "20px",
	backgroundColor: "green",
	position: "absolute",
});

console.log(el.style);
console.log(el.style.width);
console.log(el.style.fontSize);
console.log(el.style.backgroundColor);
console.log(el.style.position);
