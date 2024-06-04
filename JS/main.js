// 삼항 연산자(Ternary Operator)
// 조건 ? (조건이 참일 때 실행) : (조건이 거짓일 때 실행)

const f = ["사과", "바나나", "체리"];

// IF 조건문
if (f.length > 0) {
	console.log("과일이 존재합니다.");
} else {
	console.log("과일이 존재하지 않습니다.");
}

// 삼항 연산자
const message =
	f.length > 0 ? "과일이 존재합니다." : "과일이 존재하지 않습니다";
console.log(message);
