//1

/*



Object : jika diartikan ke dalam bahasa indonesia adalah benda / tujuan / sasaran.

Array : jika diartikan ke dalam bahasa indonesia adalah susunan / aturan / jajaran.

perbedaan
Object{} : untuk tampilkan list bentuk string “ ” /kata
Array[]: untuk tampilkan list bentuk index number/angka.

array
let motor = ["suzuki", 2, "honda", "yamaha"];
console.log(motor[0]) //output suzuki karena index mulai dari 0;

// object
let motor = {
  nama: "yamaha",
  roda: 2,
  warna: "hitam",
  bensin: true,
};

console.log(motor); // memanggil object;
console.log(motor.nama); //mengambil data dari objek hanya value nama ;

*/

// 2.
const hobi = ["game", "coding", "nonton movie/yt"];

// 3.
let saya = {
  nama: "imam basri",
  umur: 25,
  alamat: "Desa Sungai Kedukan",
  hobi: hobi,
};
console.log(saya);

// 4.
const sekolah = [
  {
    namaSekolah: "SDN 17 Pagi Cakung Barat",
    jurusan: undefined,
    tahunMasuk: 2002,
    tahunLulus: 2008,
  },
  {
    namaSekolah: "SMPN 144 Jakarta",
    jurusan: undefined,
    tahunMasuk: 2008,
    tahunLulus: 2011,
  },
  {
    namaSekolah: "SMKN 4 Jakarta",
    jurusan: "Teknik Audio Video",
    tahunMasuk: 2011,
    tahunLulus: 2014,
  },
];
console.log(sekolah);
