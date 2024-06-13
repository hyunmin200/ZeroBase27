// 첫 번째 방식이 클래스의 생성자를 이용해서 인스턴스를 만드는 방식이고
// 이 생성자 방식을 좀 더 쉽게 만든 것이 기호를 사용해서 인스턴스를 만드는 두 번째의 리터럴 방식이다.
const fruits = new Array("Apple", "Banana", "Cherry");
// const fruits = ["Apple", "Banana", "Cherry"];

// fruits.includes("Apple");
// fruits.filter(item => item);
// fruits.push("orange");
// 프로토타입 함수의 그 클래스의 모든 인스턴스에서 사용이 가능하다.
Array.prototype.abc = function () {
	console.log(this);
	return this.map((item) => item.slice(0, 1).toLowerCase());
};

const newFruits = fruits.abc();
console.log(newFruits);
console.log(Array.isArray(fruits));
// fruits.isArray()가 없는 이유를 이제 알겠나?
// 모든 데이터 형식의 isArray()를 넣게 되면 낭비가 심하기 때문이다.
// 누가봐도 객체인데 객체.isArray()??를 하는 것이 이상하기 때문이다.
// 이러하여 정적 메소드를 사용해서 보조하는 기능을 만드는 것 같다.
console.log(Array.isArray(newFruits));

const user = { name: "200원" };
console.log(Array.isArray(user));
// user.isArray()
