// Sintaks Dasar If
// if (kondisi) {
//   // aksi yang dijalankan jika kondisi bernilai true
// }

// Contoh Penggunaan If
// let angka = 1;
// if (angka === 1) {
//   alert("Anda memasukkan angka satu");
// }

// Menggunakan Operator Perbandingan dalam If
// let angka2 = 2;
// if (angka2 < 5) {
//   alert("Angka lebih kecil dari 5");
// }

// Mengecek Bilangan Genap atau Ganjil
// let angka = 3;
// if (angka % 2 === 0) {
//   alert("Angka adalah bilangan genap");
// } else {
//   alert("Angka adalah bilangan ganjil");
// }

// Menggunakan Input dari Pengguna
let angka = prompt("Masukkan sebuah angka:");
if (angka % 2 === 0) {
  alert(angka + " adalah bilangan genap");
} else {
  alert(angka + " adalah bilangan ganjil");
}
