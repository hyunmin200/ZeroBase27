// splice(인덱스, 삭제개수, 추가요손)

// 요소 추가
const f1 = ["사과", "바나나", "체리"];
f1.splice(2, 0, "두리안");
console.log(f1);

// 요소 삭제
const f2 = ["사과", "바나나", "체리"];
f2.splice(1, 1);
console.log(f2);

// 요소 교체
const f3 = ["사과", "바나나", "체리"];
f3.splice(1, 1, "두리안", "오렌지", "망고");
