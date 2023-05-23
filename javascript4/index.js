// ?1 DEN N E KADAR SAYILARI YAZDIRINIZ FOR DÖNGÜSÜ
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}fs14`);
// }
// 1fs14
// 2fs14
// 3fs14
// 4fs14
// 5fs14
// ...... GİBİ GİDER

// ?1 DEN N E KADAR SAYILARI TOPLAYAN KODU YAZINIZ
// const n = +prompt("enter your number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
//   console.log(`sum:${sum}`);
// }

// sum:1
// index.js:17 sum:3
// index.js:17 sum:6
// index.js:17 sum:10
// index.js:17 sum:15

// ?0-100 arasında n  adet rastgele tamsayı üreten kodu yazınız

//* Math.random() =>>> 0-1 arasında rastgele sayı üretir
//? Math.raund(math.random() * 100) bu şekilde yapılan işlemde öncelikle math.random çıkan tam sayıyı bir üst rakama yuvarlar,parantrezin içine math.random yazınca rastgele sayı atar tam sayı olduğu için 0-1 arası sallar.bunu *100 yapmamaızın sebebi tam sayıdan kurtarmak

// const number = +prompt("how many numbers:?");

// for (let sayac = 1; sayac <= number; sayac++) {
//   const rastgeleSayı = Math.round(Math.random() * 100);
//   console.log(`$20
//   {sayac}.sayınız: ${rastgeleSayı}`);
// }

//  1.sayınız: 19
//  2.sayınız: 96
//  3.sayınız: 44
//  4.sayınız: 42
//  5.sayınız: 72

// ? ÖDEV:1 girilen bir sayının asal olup olmadığını for döngüleriyle yapınız

// let sayaç = 1;
// while (sayaç <= 100) {
//   console.log(`${sayaç},ahmet`);

// }

// !..........while........
// *kullanıcılaeın 0-100 arasında bir not girilmesi isteyen ve girilen not 0-100 den farklı ise kullanmıcıyı uyararak yeniden 0-100 arasında not girilmesini isteyen döngüyü while ile yapınız

// let not = +prompt("lütfen 0-100 arasında bir not giriniz");

// while (not < 0 || not > 100) {
//   console.log("not 0'dan küçük vea 100'den bütyük olamaz");
//   not = prompt("lütfen 0-100 arasında bir not giriniz");
// }
// console.log("notunuz:", not);

// !..........DO-WHİLE..........
// let not;
// do {
//   not = +prompt("lütfen 0-100 arasında bir not giriniz");
//   if (not < 0 || not > 100) {
//     alert("lütfen 0-100 arasında bir not giriniz");
//   }
// } while (not < 0 || not > 100);

// console.log("notunuz:", not);

// !............for döngüsü ile yapılması.........
// let not = prompt("lütfen 0-100 arasında bir not giriniz");

// for (; not < 0 || not > 100; ) {
//   alert("lütfen 0-100 arasında bir not giriniz");
//   not = prompt("lütfen 0-100 arasında bir not giriniz");
// }
// console.log("notunuz:", not);
