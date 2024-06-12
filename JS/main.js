const user = {
	name: "200원",
	age: 200,
	email: "200woni@naver.com",
	isValid: true, // 후행 쉼표
};
console.log(JSON.stringify(user));

const json = JSON.stringify(user);
console.log(json);
console.log(JSON.parse(json));
