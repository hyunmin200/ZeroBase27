// 프로토타입
class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getBirthYear() {
		const year = new Date().getFullYear();
		return year - this.age;
	}
}

const thw = new User("thw", 200);
const hhm = new User("hhm", 19);

console.log(thw);
console.log(hhm);
console.log(thw.getBirthYear());
console.log(hhm.getBirthYear());
console.log(thw.getBirthYear() === hhm.getBirthYear());
