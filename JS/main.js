const el = document.querySelector("#apple");

el.classList.add("active");
console.log(el.classList.contains("active"));

el.classList.remove("active");
console.log(el.classList.contains("active"));

el.addEventListener("click", () => {
	el.classList.toggle("active");
	console.log(el.classList.contains("active"));
});
