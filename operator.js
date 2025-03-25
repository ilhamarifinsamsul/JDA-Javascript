// Operator Logika
let a = 8;
console.log(a % 2 == 0 && a < 15); // true
console.log(a % 2 === 0 || a < 5); // true
console.log(!(a < 10)); // false

// Operator String
let b = "Apple";
let c = "Pen";
console.log(b + " " + c);

// Operator typeof
console.log(typeof 10); // "number"
console.log(typeof "10"); // "string"
console.log(typeof true); // "boolean"

// Operator Kondisional (Ternary Operator)
let x = 5;
let hasil = x % 2 === 0 ? "Genap" : "Ganjil";
console.log(hasil); // "Ganjil"
