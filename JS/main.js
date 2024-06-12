const parentEl = document.querySelector(".parent");
const appleEl = document.querySelector(".apple");

console.log(parentEl.clientWidth, parentEl.clientHeight);
console.log(appleEl.clientWidth, appleEl.clientHeight);

console.log(parentEl.offsetWidth, parentEl.offsetHeight);
console.log(appleEl.offsetWidth, appleEl.offsetHeights);

console.log(parentEl.scrollWidth, parentEl.scrollHeight);
console.log(appleEl.scrollWidth, appleEl.scrollHeight);
