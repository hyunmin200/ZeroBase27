const el = document.querySelector("#apple");

console.log(el.getAttribute("class"));
console.log(el.getAttribute("title"));

// 덮어쓰여진다.
// el.setAttribute("class", "hello-world")
el.setAttribute("title", "Hello-World");

console.log(el.hasAttribute("class"));
console.log(el.hasAttribute("title"));
console.log(el.hasAttribute("value"));

el.removeAttribute("class");
el.removeAttribute("title");
