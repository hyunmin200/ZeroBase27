const nodeList = document.querySelectorAll("div");
console.log(nodeList);

// NodeList는 유사 배열이며, '.forEach()' 메소드는 내장되어 있지만,
// 기타 배열 메소드는 사용할 수 없다.
nodeList.forEach((e, i) => console.log(i + 1, e));

// NodeList 객체는 'Array.from()' 메소드를 통해서 배열로 변환할 수 있다.
const nodes = Array.from(nodeList);
const names = nodes.map((e) => e.textContent);
console.log(names);
