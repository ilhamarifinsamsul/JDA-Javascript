// Dasar Pengulangan dengan for
// for (let i = 0; i < 5; i++) {
//   console.log("*");
// }

// Menggunakan Variabel untuk Menyusun Pola
// let s = "";
// for (let i = 0; i < 5; i++) {
//   s += "*";
// }
// console.log(s);

// let b = "";
// for (let i = 0; i < 5; i++) {
//   b += "*\n";
// }
// console.log(s);

// Pengulangan Bersarang
// let s = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// Membuat Segitiga dengan Pengulangan Bersarang
// let s = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// Untuk mencetak segitiga terbalik:
// let b = "";
// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     b += "*";
//   }
//   b += "\n";
// }
// console.log(b);

// Studi Kasus: Papan Catur
let s = "";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      s += "#";
    } else {
      s += " ";
    }
  }
  s += "\n";
}
console.log(s);
