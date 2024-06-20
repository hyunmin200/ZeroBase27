const h1El = document.querySelector("h1");

const createToggleHandler = () => {
	let isRed = false;
	return (event) => {
		isRed = !isRed;
		event.target.style.color = isRed ? "red" : "black";
	};
};

h1El.addEventListener("click", createToggleHandler());
