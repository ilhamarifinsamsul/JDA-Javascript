// Foreach
// Contoh penggunaan foreach
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index) => {
//   console.log(item, index);
// });

// Contoh forEach dengan Indeks
// let mahasiswa = ["Andi", "Budi", "Cindy"];
// mahasiswa.forEach((nama, index) => {
//   console.log(`Mahasiswa ke-${index + 1}. adalah ${nama}`);
// });

// Map()
// Contoh penggunaan map
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((i) => {
  return i * 3;
});
console.log(arr2);
