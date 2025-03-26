// Splice: Menyisipkan dan Menghapus Elemen dalam Array

// Sintaksis
// array.splice(index_awal, jumlah_hapus, elemen_baru1, elemen_baru2, ...)
// index_awal: Index dari elemen yang akan dihapus
// jumlah_hapus: Jumlah elemen yang akan dihapus dari index_awal
// elemen_baru: Elemen baru yang akan ditambahkan ke dalam array

// Contoh penggunaan splice sebelum splice
// const fruits = ["apple", "banana", "cherry", "date"];
// console.log(fruits);
// Contoh penggunaan splice sesudah splice
// const fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(2, 1, "orange", "grape");
// console.log(fruits);

// Menghapus elemen:
// fruits.splice(1, 2);
// console.log(fruits);

// Slice: Mengiris Array menjadi Array Baru
// Sintaksis
// let arrayBaru = array.slice(index_awal, index_akhir);
// index_awal → Posisi awal elemen yang ingin diambil.
// index_akhir → Posisi akhir (tidak termasuk elemen pada indeks ini)
// Contoh penggunaan
let arr2 = ["Sandika", "Galih", "Nova", "Dodi", "Fitri"];
let newArr = arr2.slice(1, 3); // Mengambil elemen indeks 1 dan 2
console.log(newArr); // Output: ['Galih', 'Nova']
