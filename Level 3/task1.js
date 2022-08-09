let a = 1;
let b = 2;
let c = a;
// cara 1
a = b;
b = c;
// cara 2 array destructuring assigment
// [a, b] = [b, a];
console.log(`a: ${a} b: ${b}`);
