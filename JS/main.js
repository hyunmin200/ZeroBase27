function User() {
	this.name = "User";
	return {
		name: "Neo",
		age: 80,
		// getInfo() {
		// 	return `${this.name}는 ${this.age}입니다.`;
		// },
		getInfo: () => {
			return `${this.name}는 ${this.age}입니다.`;
		},
	};
}

const u = new User();
console.log(u.name);
console.log(u.age);
console.log(u.getInfo());

const evan = {
	name: "Evan",
	age: 25,
};
console.log(u.getInfo.call(evan));
