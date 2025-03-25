function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 10); // Memanggil function dengan argumen 5 dan 10
console.log(hasil); // Output: 15

// Cara Menggunakan Parameter dan Argumen
// Nilai langsung
console.log(tambah(2, 3)); // Output: 5
// Variabel
let a = 5;
let b = 3;
console.log(tambah(a, b)); // Output: 8

// Input dari pengguna
let angka1 = parseInt(prompt("Masukkan nilai pertama: "));
let angka2 = parseInt(prompt("Masukkan nilai kedua: "));
console.log(tambah(angka1, angka2));
