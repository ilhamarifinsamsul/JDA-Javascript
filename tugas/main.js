function run(n) {
    // Pembulatan harga barang
    let roundedPrice = Math.ceil(n);

    // Penerapan diskon berdasarkan harga barang
    if (roundedPrice > 50000) {
        roundedPrice *= 0.85; // Diskon 15%
    } else if (roundedPrice > 35000) {
        roundedPrice *= 0.90; // Diskon 10%
    } else if (roundedPrice > 20000) {
        roundedPrice *= 0.95; // Diskon 5%
    }

    // Mengembalikan harga setelah diskon
    return Math.round(roundedPrice);
}

// Contoh penggunaan
console.log(run(11898)); // Output: 11898
console.log(run(23303)); // Output: 22138
console.log(run(38000)); // Output: 34200
console.log(run(42500)); // Output: 38250
console.log(run(280324)); // Output: 238276

