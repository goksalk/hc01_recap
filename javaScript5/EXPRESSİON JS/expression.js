const yazdır = function (message) {
  console.log(message);
};
yazdır("hallo FS14");

let oddEven = function (number) {
  return number % 2 === 0 ? " even" : "odd";
};
console.log(oddEven(5));
console.log(oddEven(4));

// !arrow function yöntemi
const kareAl = (x) => x * x;
console.log(kareAl(4));

const topla = (num1, num2) => num1 + num2;
console.log("TOPLA", topla(4, 5));

// *3 sayının en büyüğünü bulan fonk

const findBiggest = (n1, n2, n3) => {
  let biggest = n1;

  if (n2 >= biggest) {
    biggest = n2;
  }
  if (n3 >= biggest) {
    biggest = n3;
  }
  return biggest;
};
console.log("BİGGEST", findBiggest(1, 3, 2));
