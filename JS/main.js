const el = document.querySelector("#apple");
const str = "Hello World";
const num = 123;
const obj = {
	a: 1,
	b: 2,
};

console.log(el.dataset);

el.dataset.helloWorld = str;
el.dataset.number = num;
el.dataset.object = JSON.stringify(obj);

console.log(el.dataset);

console.log(el.dataset.helloWorld);
console.log(el.dataset.number);
console.log(JSON.parse(el.dataset.number));
console.log(el.dataset.object);
console.log(JSON.parse(el.dataset.object));
