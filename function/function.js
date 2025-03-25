// Built-in Function
// alert()
// confirm()
// Math.random()
// console.log()
// slice()
// split()

// User-defined Function
// function declaration
// function jumlahDuaBilangan(a, b) {
//   return a + b;
// }

// function expression
// const jumlahDuaBilangan = function (a, b) {
//   return a + b;
// };

// Cara Memanggil Function
// console.log(jumlahDuaBilangan(2, 3));

// Menjumlahkan Volume Dua Kubus
function jumlahVolumeKubus(a, b) {
  var volumeA = a * a * a;
  var volumeB = b * b * b;
  var total = volumeA + volumeB;

  return total;
}

console.log(jumlahVolumeKubus(8, 3));
console.log(jumlahVolumeKubus(10, 15));
