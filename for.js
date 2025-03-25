// for (let nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//   console.log("Hello World");
// }

// Studi Kasus: Pengelolaan Angkot
let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

// Menggunakan while
while (noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`);
  noAngkot++;
}

// Menggunakan for
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
}
