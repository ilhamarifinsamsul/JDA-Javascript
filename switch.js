// Sintaks Dasar
// switch (ekspresi) {
//   case nilai1:
//     // Aksi jika ekspresi bernilai nilai1
//     break;
//   case nilai2:
//     // Aksi jika ekspresi bernilai nilai2
//     break;
//   default:
//   // Aksi jika tidak ada nilai yang cocok
// }

// Contoh Penggunaan: Menentukan Angka yang Dimasukkan
let angka = parseInt(prompt("Masukkan angka: "));

switch (angka) {
  case 1:
    alert("Anda memasukkan angka 1");
    break;
  case 2:
    alert("Anda memasukkan angka 2");
    break;
  case 3:
    alert("Anda memasukkan angka 3");
    break;
  default:
    alert("Angka yang Anda masukkan salah");
}

// Menentukan Jenis Makanan Sehat
let item = prompt(
  "Masukkan nama makanan atau minuman: \n(Nasi, Daging, Susu, Hamburger, Soft Drink)"
);

switch (item) {
  case "Nasi":
  case "Daging":
  case "Susu":
    alert("Makanan atau minuman sehat");
    break;
  case "Hamburger":
  case "Soft Drink":
    alert("Makanan atau minuman tidak sehat");
    break;
  default:
    alert("Anda memasukkan nama makanan atau minuman yang salah");
}
