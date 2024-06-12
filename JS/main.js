const parentEl = document.querySelector(".parent");

// 요소의 모든 자식 노드를 확인합니다.
// 요소, 텍스트, 주석 전부 나옴
console.log(parentEl.childNodes);

// 요소의 모든 자식 요소를 확입합니다.
// 자식 요소만 나옴
console.log(parentEl.children);
