const a = 1;
const b = "1";

// == 동등 연산자
console.log("동등", a == b); // true
// === 일치 연산자
console.log("일치", a === b); // false

// 다음 코드는 모두 true를 출력합니다.
console.log("=================");
console.log(123 == "123");
console.log(1 == true);
console.log(0 == false);
console.log(null == undefined);
console.log("" == false);

// 다음 코드는 모두 false 출력합니다.
console.log("=================");
console.log(123 === "123");
console.log(1 === true);
console.log(0 === false);
console.log(null === undefined);
console.log("" === false);
