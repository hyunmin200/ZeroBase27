function renderImage(callback) {
	const imgEl = document.createElement("img");
	imgEl.src = "https://picsum.photos/3000/2000";
	imgEl.addEventListener("load", () => {
		document.body.append(imgEl);
		callback();
	});
}
renderImage(() => {
	console.log("Done 1");
	renderImage(() => {
		console.log("Done 2");
		renderImage(() => {
			console.log("Done 3");
			renderImage(() => {
				console.log("Done 4");
			});
		});
	});
});
