const h1El = document.querySelector("h1");
const ulEl = document.createElement("ul");
document.body.append(ulEl);

h1El.addEventListener("click", async () => {
	ulEl.textContent = "Loading...";
	// promise instance가 반환이 된다.
	// await로 데이터를 가져오는 것을 기다림 (promise instance에만 사용가능)
	const res = await fetch("https://api.heropy.dev/v0/users");
	// 데이터 분석이 끝나는 것을 기다림
	const data = await res.json(); // promise instance 반환함
	const { users } = data;
	const liEls = users.map((user) => {
		const liEl = document.createElement("li");
		liEl.textContent = user.name;
		const imgEl = document.createElement("img");
		imgEl.src = user.photo?.url || "https://heropy.dev/favicon.png";
		liEl.prepend(imgEl);
		return liEl;
	});
	ulEl.textContent = "";
	ulEl.append(...liEls);
});
