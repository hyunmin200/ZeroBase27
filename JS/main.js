const fruits1 = ["APPLE", "BANANA", "CHERRY"];
console.log(fruits1.reverse());
console.log(fruits1);

// 원본이 변경 안되었으면 좋겠다?
const fruits2 = ["APPLE", "BANANA", "CHERRY"];
console.log([...fruits2].reverse());
console.log(fruits2);
