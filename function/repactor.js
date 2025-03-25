// Contoh Refactoring
// Sebelum Refactoring
// function hitungVolumeKubus(a, b) {
//   let volumeA = a * a * a;
//   let volumeB = b * b * b;
//   let total = volumeA + volumeB;

//   return total;
// }
// console.log(hitungVolumeKubus(8, 3));

// Setelah Refactoring
function hitungVolumeKubus(a, b) {
  return a * a * a + b * b * b;
}

console.log(hitungVolumeKubus(8, 3));
