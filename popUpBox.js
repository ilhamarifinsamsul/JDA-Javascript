// Alert Box
alert("Hello, World!");

// Prompt Box
var nama = prompt("Masukkan nama Anda:");
alert("Halo, " + nama);

// Confirm Box
var konfirmasi = confirm("Apakah anda yakin>");
if (konfirmasi) {
  alert("Anda menekan tombol Ok!");
} else {
  alert("Anda menekan tombol Cancel!");
}

// Menggunakan Popup Box dalam Pengulangan
alert("Selamat Datang!");
var lagi = true;
while (lagi) {
  var nama = prompt("Masukkan nama:");
  alert("Hallo" + nama);
  lagi = confirm("Coba Lagi?");
}
alert("Terimakasih...");
