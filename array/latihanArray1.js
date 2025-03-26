// Program sederhana data penumpang angkot

let penumpang = ["Ilham", undefined, "Budi"];

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
