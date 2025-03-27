// Program sederhana data penumpang angkot

let penumpang = [];

let tambahPenumpang = (namaPenumpang, penumpang) => {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    // Tambahkan penumpang pertama
    penumpang.push(namaPenumpang);
    // kembalikan nilai array penumpang
    return penumpang;
  } else {
    // Telusuri seluruh penumpang dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambahkan penumpang di kursi kosong
        penumpang[i] = namaPenumpang;
        // kembalikan nilai array penumpang
        return penumpang;
      }
      //   tambahkan penumpang di akhir array
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
      //   Jika nama penumpang sudah ada di dalam angkot
      else if (penumpang[i] == namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada di dalam angkot!`);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = (namaPenumpang, penumpang) => {
  // Jika angkot kosong tampilkan pesan bahwa angkot kosong
  if (penumpang.length == 0) {
    console.log(`Angkot Masih Kosong!`);
    return penumpang;
  } // telusuri seluruh penumpang
  else {
    for (let i = 0; i < penumpang.length; i++) {
      // Jika penumpang ditemukan
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengisi dengan undefined
        penumpang[i] = undefined;
        // kembalikan array penupang
        return penumpang;
      } // Jika penumpang tidak ditemukan
      else if (i == penumpang.length - 1) {
        console.log(`${namaPenumpang} sudah keluar dari angkot!`);
        return penumpang;
      }
    }
  }
};
