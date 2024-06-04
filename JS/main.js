// 산술 연산자 (Arithmetic operator)

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

// 할당 연산자 (Assignment Operators)

let a = 3;
console.log(a);

// a = a + 2
a += 2;
console.log(a);

// a = a - 2
a -= 2;
console.log(a);

// a = a * 2
a *= 2;
console.log(a);

// a = a / 2
a /= 2;
console.log(a);

// a = a % 2
a %= 2;
console.log(a);

// 증감 연산자 (Increment & Decrement Operators)는 변수를 1씩 더하거나 빼는 연산자이다.

// ++ 기호가 뒤에 있는 경우
let b = 3;
console.log(b++);
console.log(b);

// ++ 기호가 앞에 있는 경우
let c = 3;
console.log(++c);
console.log(c);

// -- 기호가 뒤에 있는 경우
let d = 3;
console.log(d--);
console.log(d);

// -- 기호가 앞에 있는 경우
let f = 3;
console.log(--f);
console.log(f);

// 증감 연산자 보다는, 할당 연산자를 사용하는 것을 추천한다.
let e = 3;
e += 1;
console.log(e);
e -= 1;
console.log(e);
