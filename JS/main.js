// class
class User {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	set fullName(value) {
		const names = value.split(" ");
		this.first = names[0];
		this.last = names[1];
	}
}

const thw = new User("200", "원");

// Get
console.log(thw.fullName);
//Set
thw.fullName = "황 현민";

console.log(thw);
