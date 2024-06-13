class A {
	constructor(a) {
		this.a = a;
	}
}

class B extends A {
	constructor(a, b) {
		// super를 사용하게 되면 부모 클래스의 생성자에 접근해서 값을 넣어준다.
		super(a);
		this.b = b;
	}
}

const a = new A(1);
const b = new B(1, 2);

// a의 prototype이 Object라는 것은 a도 부모 클래스로 object를 상속받고 있다는 것이다.
console.log(a);
// b의 prototype은 A클래스로 부모 클래스로 A클래스를 상속받고 있다는 것이다.
console.log(b);

// A클래스에서 만들었기에 A클래스의 인스턴스가 맞음
console.log(a instanceof A); // true
// B클래스에서 만들었지만 A클래스의 확장 버전이기 때문에 A클래스의 인스턴스라고 볼 수 있음
console.log(b instanceof A); // true

// A클래스는 B라는 클래스의 상위 클래스이기 때문에 B라는 클래스의 인스턴라고 볼 수 없다.
console.log(a instanceof B); // false
// B클래스에서 만들었기에 Bs클래스의 인스턴스가 맞음
console.log(b instanceof B); // true

console.log(a instanceof Object); // true
console.log(b instanceof Object); // true
