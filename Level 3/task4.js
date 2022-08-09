// 1

/* cara membuat ifelse
pertama ketik lalu didalam () berikan kondisi jika benar/salah maka {} ini akan dikerjakan sebelum masuk ke step berikan , dan jika salah dia akan turun kebawah/ kondisi ke 2 yaitu else {} lalu berikan kondisi ini jika tidak sesuai sama kondisi pertama.

    //kondisi
if( 1 == 1 ){
    //kondisi jika benar
console.log("benar sama dengan 1")
}else{
    //kondisi jika salah
    console.log("bukan sama dengan 1")
}
*/

// 2.

function cekParameter(x) {
  if (x) {
    return console.log("ini parameter " + x);
  } else {
    return console.log("tidak ada parameternya");
  }
}
cekParameter(1); //ada paramater
cekParameter(); // tidak ada parameter
