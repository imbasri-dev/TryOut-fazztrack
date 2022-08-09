//1
/* sebuah urutan perintah yang secara menerus diulang hingga suatu kondisi tercapai. Kondisi yang dimaksud disini dapat dalam bentuk yang berbeda-beda seperti; mendapatkan data dan merubah data, dan apakah sebuah nilai sudah mencapai jumlah yang ditentukan. */

/*;
---for---
for (let i = 1; i <= 10; i++) {
  console.log("angka diulang sebanyak: " + i);
}

---for in loop untuk object---
const person = { namaDepan: "imam", namaBelakang: "basri", umur: 25 };
let text = "";
for (let i in person) {
  text += person[i] + " ";
}
console.log(text)// imam basri 25;

---for of loop untuk array---
const warna = ["merah", "hijau", "kuning"];

let pallet = "";
for (let x of warna) {
  pallet += x + " ";
}
console.log(pallet) //merah hijau kuning ;



---while---
let i = 1;
while (i <= 5) {
  console.log("angka diulang sebanyak: " + i);
  i++;
}

---do while---
let i = 1;
do {
  console.log("angka diulang sebanyak: " + i);
  i++;
} while (i <= 5);
*/

// 2.
function printNumber(num) {
  for (let i = 0; i <= num; i++) {
    console.log("print sesuai nilai parameter : " + i);
  }
}
printNumber(5);

// 3.
function fazztrack(num) {
  for (let x = 1; x <= num; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
      console.log("fazztrack");
    } else if (x % 3 == 0) {
      console.log("fazz");
    } else if (x % 5 == 0) {
      console.log("track");
    } else {
      console.log(x);
    }
  }
}
fazztrack(20);
