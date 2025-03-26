// Cara membuat array
// let hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
// // cara mengakses array
// console.log(hari[1]);
// console.log(hari[5]);

// Tipe Data dalam Array Bisa Berbeda
// Contoh
let data = [
  "Senin",
  234,
  true,
  null,
  undefined,
  function () {
    return "Hello";
  },
  [1, 2, 3],
];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[5]);
