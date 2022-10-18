const string = process.argv[2];
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

function calculos(string, numero1, numero2) {
  if (string === "add") {
    return numero1 + numero2;
  } else if (string === "sub") {
    return numero1 - numero2;
  } else if (string === "mult") {
    return numero1 * numero2;
  } else if (string === "div") {
    return numero1 / numero2;
  }
}

console.log(calculos(string, n1, n2));