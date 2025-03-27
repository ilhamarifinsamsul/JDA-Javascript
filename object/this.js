// This
// Function declaration
// function halo() {
//   console.log(this);
// }
// halo();

// Objek Literal
let obj = {
  nama: "Sandi",
  halo: function () {
    console.log(this);
  },
};
obj.halo();

// constructor function
function Halo() {
  console.log(this);
}
let obj1 = new Halo();
