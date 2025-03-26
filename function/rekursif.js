// Recursive function to calculate factorial
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1; // Base case
//   }
//   return n * factorial(n - 1); // Recursive case
// }

// // Example usage
// console.log(factorial(5)); // Output: 120

// Contoh Rekursif
// Mencetak angka mundur
// Tanpa rekursif
// for (let i = 5; i >= 1; i++) {
//   console.log(i);
// }

// Dengan rekursif
// function countDown(number) {
//   if (number <= 0) return;

//   console.log(number);
//   countDown(number - 1);
// }

// countDown(10);

// Faktorial dengan Rekursif
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
