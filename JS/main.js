const msg1 = "Hello World!";
const msg2 = "안녕하세요";

console.log(msg1.length);
console.log(msg2.length);
console.log(msg1.includes("!"));
console.log(msg2.includes("안녕"));
console.log(msg1.replace("World", "월드"));
console.log(msg2.replace("안녕하", "안녕히계"));

const msg3 = "안 녕 하 세 요";

console.log(msg1.replaceAll(" ", ""));

console.log(msg1.slice(0, 5)); // "Hello"
console.log(msg1.split(" ")); // ["Hello", "World!"]
console.log(msg1.toLowerCase());
console.log(msg1.toUpperCase());

const msg4 = "   Hello!!!	   ";
console.log(msg4.trim());
