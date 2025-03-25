// Struktur Dasar If-Else If-Else
// if (kondisi1) {
//   // Aksi jika kondisi1 bernilai true
// } else if (kondisi2) {
//   // Aksi jika kondisi2 bernilai true
// } else {
//   // Aksi jika semua kondisi di atas bernilai false
// }

// Contoh Kasus: Angkot
for (let noAngkot = 1; noAngkot <= 10; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log(`Angkot No. ${noAngkot} Sedang lembur.`);
  } else {
    console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
  }
}

// Menggunakan Else If untuk Validasi Input
let nilai = prompt("Masukkan nilai: ");
if (nilai % 2 === 0) {
  alert(`${nilai} adalah bilangan genap`);
} else if (nilai % 2 === 1) {
  alert(`${nilai} adalah bilangan ganjil`);
} else {
  alert(`${nilai} bukan bilangan angka`);
}
