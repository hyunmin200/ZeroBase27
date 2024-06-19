const a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

const c = { x: 1, y: 2 };
const d = c;
d.x = 99;
console.log(c);
console.log(d);

const e = [1, 2, 3];
const f = e;
f[0] = 99;
console.log(e);
console.log(f);
