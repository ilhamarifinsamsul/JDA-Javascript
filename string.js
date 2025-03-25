// Penulisan String
let text1 = "Gerakan 'Pungut Sampah'"; // Menggunakan kutip dua
let text2 = 'Hari ini adalah hari "Jumat"'; // Menggunakan kutip satu
let text3 = "Hari ini adalah hari Jumat'"; // Menggunakan escape character
console.log(text1);
console.log(text2);
console.log(text3);

// Konkatenasi (Penggabungan String)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Menghasilkan "John Doe"
console.log(fullName);

// Membandingkan String
console.log("apple" == "apple"); // true
console.log("apple" == "Apple"); // false (karena huruf besar/kecil berbeda)

// Mengetahui Panjang String
let text = "JavaScript";
console.log(text.length); // Menghasilkan 10
