// 1.cara membuat function

/* ketik function lalu jika ingin memberi nama function maka diberikan setelah function diketikan contoh "function namaFunction" lalu berikan tanda tutup kurung () jika ingin memberikan sebuah paramater di dalamnya maka ketikan didalam tanda kurung tersebut serta kurung kurawal {} agar scope funtion bisa digunakan maka contoh nya seperti ini

function salam(nama) {
  return console.log("Hallo " + nama + ", selamat pagi");
}

salam("basri"); cara pemanggilan function berserta paramter nilainya

 */
function salam(nama) {
  return console.log("Hallo " + nama + ", selamat pagi");
}

salam("basri"); //cara pemanggilan function berserta paramter nilainya

// 2.

function tambah(bilanganPertama, bilanganKedua) {
  let hasil = bilanganPertama + bilanganKedua;
  return console.log(hasil);
}
tambah(2, 6);
