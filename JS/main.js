function hello() {
	return "Hello";
}

// 함수 데이터(Data)
console.log(hello); // 함수 덩어리(코드) 그 자체가 출력된다
console.log(typeof hello); // function 타입이 나오게 된다.
// 이렇게 사용하면 함수안에 코드를 사용하는게 아니라 함수 안 코드를 확인만 하는 것이 된다.

// 함수 호출(Call)
console.log(hello()); // 반환 데이터인 Hello가 출력된다.
console.log(typeof hello()); // 반환하는 데이터의 타입인 string이 출력된다.
