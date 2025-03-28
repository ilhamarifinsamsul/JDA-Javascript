// Studi Kasus: Pengelolaan Angkot
// Constructor function untuk Angkot

function Angkot(supir, trayek, penumpang = [], kas = 0) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
}

// Menambahkan Method pada objek
// Penumpang naik
Angkot.prototype.penumpangNaik = function (nama) {
  this.penumpang.push(nama);
  return this.penumpang;
};

// Penumpang turun dan membayar
Angkot.prototype.penumpangTurun = function (nama, bayar) {
  if (this.penumpang.length === 0) {
    console.log("Angkot masih kosong.");
    return false;
  }
  for (let i = 0; i < this.penumpang.length; i++) {
    if (this.penumpang[i] === nama) {
      this.penumpang[i] = undefined;
      this.kas += bayar;
      return this.penumpang;
    }
  }
  console.log("Penumpang tidak ditemukan");
  return false;
};

// Contoh penggunaan
let angkot1 = new Angkot("Sandiaga Gali", ["Cicaheum", "Cibiru"]);
let angkot2 = new Angkot("Tom Cruise", ["Antapani", "Ciroyom"]);

angkot1.penumpangNaik("Erik");
angkot1.penumpangNaik("Dodi");
angkot1.penumpangTurun("Erik", 2500);
angkot1.penumpangTurun("Dodi", 4500);
