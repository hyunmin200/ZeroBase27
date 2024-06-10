// for in 문
// for (const 키변수 in 객체) {}
const user = {
	name: "이백원",
	age: 85,
	isValid: true,
	email: "gyejeongjin@gmail.com",
};
for (const key in user) {
	if (key === "age") continue;
	console.log(key, user[key]);
}
