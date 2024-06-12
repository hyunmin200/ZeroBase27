const user = {
	name: "200원",
	age: 200,
	email: "200woni@naver.com",
	isValid: true,
};
const keys = Object.keys(user);
console.log(keys);

keys.forEach((key) => {
	const el = document.createElement("div");
	el.innerHTML = `<strong>${key}</strong>: ${user[key]}`;
	document.body.append(el);
});
