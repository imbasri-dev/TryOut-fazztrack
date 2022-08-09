// 1
function gradeCheck(nilai) {
  if (nilai >= 65 && nilai <= 100) {
    console.log("Lulus!");
  } else if (nilai < 65) {
    console.log("Tidak Lulus");
  } else {
    console.log("Nilai tidak boleh sampai lebih dari 100");
  }
}
gradeCheck(101); //Nilai tidak boleh sampai lebih dari 100
gradeCheck(100);
gradeCheck(65); //Lulus!
gradeCheck(50); //Tidak Lulus

// 2.
function printSquare(num) {
  let square = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i == 1 || i == num || j == 1 || j == num) {
        square += "*";
      } else {
        square += " ";
      }
    }
    square += "\n";
  }
  console.log(square);
}
printSquare(4);
