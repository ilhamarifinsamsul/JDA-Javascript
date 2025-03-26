// Menambah Elemen ke dalam Array
// menambah secara manual dengan index
// let nama = [];
// nama[0] = "Budi";
// nama[1] = "Siti";
// nama[2] = "Joko";
// console.log(nama);

// Menggunakan method push()
// let nama2 = ["Budi", "Siti", "Joko"];
// nama2.push("Andi", "Rina");
// console.log(nama2);

// Menghapus Elemen dari Array
// Menghapus secara manual dengan mengisi undefined
// let nama3 = ["Budi", "Siti", "Joko"];
// nama3[1] = undefined;
// console.log(nama3);

// Menggunakan method pop()
// let nama = ["Budi", "Siti", "Joko"];
// nama.pop(); // menghapus elemen terakhir
// console.log(nama);

// Menggunakan method shift()
// let nama = ["Budi", "Siti", "Joko"];
// nama.shift(); // menghapus elemen pertama
// console.log(nama);

// Mengggunakan method unshift()
// let nama = ["Budi", "Siti", "Joko"];
// nama.unshift("Andi", "Ina"); // menambah elemen di awal array
// console.log(nama);

// Menggunakan for loop
let nama = ["Budi", "Siti", "Joko"];
for (let i = 0; i < nama.length; i++) {
  //   console.log(`Mahasiswa ke-${i + 1}: ${nama[i]}`);
  console.log(nama[i]);
}
