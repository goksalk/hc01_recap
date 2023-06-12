// let x = 1;
// let y = 0;
// while (x < 4) {
//   x++;
//   y += x * 3;
//   console.log(y);
// }
// console.log(typeof NaN);
// ?fibonacci
let num = prompt("Kaçıncı fibonacci sayısını öğrenmek istiyorsunuz?");
let sayi1 = -1;
let sayi2 = 1;
let toplam;
let Fibosayisi = [];
for (let i = 0; i <= num; i++) {
  toplam = sayi1 + sayi2;
  sayi1 = sayi2;
  sayi2 = toplam;
  Fibosayisi.push(toplam);
}
alert(`Fibonacci (${num}) : ${toplam}`);
