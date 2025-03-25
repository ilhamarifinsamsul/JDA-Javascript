// Membuat game suit sederhana
var tanya = true;
while (tanya) {
  // Pemain memasukan pilihan gajah, semut, orang
  var player = prompt("Masukkan pilihan anda: gajah, semut, orang");

  // Menentukan Pilihan Komputer

  // Biliangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // Menentukan Rules
  var hasil = "";

  if (player == comp) {
    hasil = "Hasilnya Seri!";
  } else if (player == "gajah") {
    hasil = comp == "orang" ? "Menang!" : "Kalah!";
  } else if (player == "orang") {
    hasil = comp == "gajah" ? "Kalah!" : "Menang!";
  } else if (player == "semut") {
    hasil = comp == "orang" ? "Kalah!" : "Menang!";
  } else {
    hasil = "Memasukan pilihan yang salah!";
  }

  // Menampilkan hasilnya
  alert(
    "Anda memilih: " +
      player +
      " dan komputer memilih: " +
      comp +
      "\nMaka hasilnya: " +
      hasil
  );
  tanya = confirm("Apakah anda ingin bermain lagi?");
}
alert("Terimakasih sudah bermain!");
