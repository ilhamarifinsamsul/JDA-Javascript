// Object Literal
// Contoh
// const mahasiswa = {
//   name: "Jhon Doe",
//   nip: "12343123",
//   prodi: "Teknik Informatika",
//   email: "jhon@gmai.com",
// };

// Function Declaration
// function buatMahasiswa(name, nip, prodi, email) {
//   var mahasiswa = {};
//   mahasiswa.nama = name;
//   mahasiswa.nip = nip;
//   mahasiswa.prodi = prodi;
//   mahasiswa.email = email;
//   return mahasiswa;
// }

// var mahasiswa2 = buatMahasiswa(
//   "Dodi",
//   "654321",
//   "Teknik Elektro",
//   "dodi@email.com"
// );

// Function Contruction
// function Mahasiswa(nama, nrp, email, jurusan) {
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
// }

// var mahasiswa3 = new Mahasiswa(
//   "Erick",
//   "789012",
//   "erick@email.com",
//   "Sistem Informasi"
// );

let mahasiswa = {
  nama: "Sandi",
  umur: 21,
  lulus: true,
  ips: [3.5, 3.8, 4.0],
  alamat: {
    jalan: "Jl. Merdeka",
    kota: "Bandung",
    provinsi: "Jawa Barat",
  },
  hitungIPK: function () {
    let total = this.ips.reduce((a, b) => a + b);
    return total / this.ips.length;
  },
};

console.log(mahasiswa.nama);
console.log(mahasiswa.alamat);
