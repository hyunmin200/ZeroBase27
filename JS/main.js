// 전개 연산자(Spread Operator)

// 배열 데이터
const numbers = [1, 2, 3];
console.log(numbers); // [1, 2, 3]
console.log(...numbers); // 1, 2, 3

const n1 = [1, 2, 3];
const n2 = [2, 3, 4];
const n3 = n1.concat(n2);
const n4 = [...n1, ...n2];
console.log(n3); // [1, 2, 3, 2, 3, 4]
console.log(n4); // [1, 2, 3, 2, 3, 4]

// 객체 데이터
const o1 = { a: 1, b: 2, c: 3 };
const o2 = { b: 99, c: 100, d: 101 };
const o3 = Object.assign({}, o1, o2);
const o4 = { ...o1, ...o2 };
console.log(o3); // { a: 1, b: 99, c: 100, d: 101}
console.log(o4); // { a: 1, b: 99, c: 100, d: 101}
