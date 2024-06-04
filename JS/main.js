const user = {
	name: "현민",
	age: 18,
	isValid: true,
	email: "gyejeongjin@gmail.com",
	hello: function () {
		return `내 이름은 ${this.name}이다. 내 나이는 ${this.age}`;
	},
};

// 점 표기법(Dot Notation)을 사용해, 객체의 속성이나 메소드에 접근할 수 있다.
console.log(user.name);
console.log(user.age);
console.log(user.isValid);
console.log(user.email);
console.log(user.hello());

// 대괄호 표기법(Bracket Notation)을 사용해, 객체의 속성이나 메소드에 접근할 수 있다.
console.log(user["name"]);
console.log(user["age"]);
console.log(user["isValid"]);
console.log(user["email"]);
console.log(user["hello"]());
