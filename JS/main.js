const parentEl = document.querySelector(".parent");

parentEl.addEventListener("click", (event) => {
	console.log(parentEl);
	console.log(event.target);
});

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", (event) => {
	console.log(event.key);
	console.log(inputEl.value);
	console.log(event.target.value);
});
