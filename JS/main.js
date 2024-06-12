const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", (e) => {
	// if (e.isComposing) return;
	if (e.key === "Enter") {
		const h1El = document.createElement("h1");
		h1El.textContent = inputEl.value;
		document.body.append(h1El);
	}
});
