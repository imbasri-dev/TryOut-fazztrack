// 1

function ganjil(n) {
  if (n % 2 == 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
ganjil(5);
function genap(n) {
  if (n % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
genap(10);

// 2
function printTriangle(num) {
  let print = "";
  for (let i = 1; i <= num; i++) {
    print += "*";
    console.log(print);
  }
}
printTriangle(5);
