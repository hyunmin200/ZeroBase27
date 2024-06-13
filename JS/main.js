function renderImage() {
	return new Promise((resolve) => {
		const imgEl = document.createElement("img");
		imgEl.src = "https://picsum.photos/3000/2000";
		imgEl.addEventListener("load", () => {
			document.body.append(imgEl);
			resolve();
		});
	});
}
renderImage()
	.then(() => {
		console.log("Done 1");
		return renderImage();
	})
	.then(() => {
		console.log("Done 2");
		return renderImage();
	})
	.then(() => {
		console.log("Done 3");
		return renderImage();
	})
	.then(() => {
		console.log("Done 4");
	});
