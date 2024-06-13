class User {
	constructor(first, last) {
		// this 키워드는 클래스로 생성된 인스턴스라고 생각하면 된다.
		this.firstName = first;
		this.lastName = last;
	}
	static isUser(user) {
		return user instanceof User;
	}
}

const thw = new User("200", "원");
const hhm = new user("황", "현민");
const hhh = {
	name: "황황현",
	age: 100,
};

console.log(User.isUser(thw));
console.log(User.isUser(hhm));
console.log(User.isUser(hhh));
