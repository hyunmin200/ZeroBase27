const parentEl = document.querySelector(".parent");
const appleEl = document.querySelector("#apple");

console.log(parentEl.contains(appleEl));
console.log(document.body.contains(parentEl));
console.log(document.body.contains(appleEl));
console.log(document.body.contains(document.body));
console.log(parentEl.contains(document.body));
console.log(appleEl.contains(document.body));
