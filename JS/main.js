// const 키워드는 상수(Constant)를 의미하며, 한 번 선언하면 다른 값으로 변경 할 수 없다.
const c = 12;
console.log(c);
console.log(c);
// c = 34; // Error: Assignment to constant variable.
// JS는 Error가 발생하면 아래 코드를 싹다 무시한다.

// let 키워드는 선언한 값을 다른 값으로 바꿀 수 있다.
let l = 12;
console.log(l);
console.log(l);
l = 13;
console.log(l);
console.log(l);
