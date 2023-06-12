// const n1 = +prompt("num1:");
// const n2 = +prompt("num2:");
// const n3 = +prompt("num3:");

// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log("biggest:", n1);
//   }
// } else if (n3 > n1) {
//   console.log("biggest:", n3);
// }

// !ternary

// const grade1 = prompt("please enter yout grade:");

// grade1 >= 50 ? console.log("SUCCEED") : console.log("FAiled");
// const score = grade1 >= 50 ? "passed" : "failed";
// console.log(score);

// const speed = +prompt("hızınız nedir");

// if (speed >= 120) {
//   console.log("hızlı");
// } else if (speed >= 90) {
//   console.log("normal");
// } else {
//   console.log("yavaş");
// }

// // !short circuit
// const age = 15;
// const description = age >= 18 ? "adult" : "küçük";
// ?..................DÖNGÜLER...................ITERASYON

// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}--FS14`);
// }

// ?1 DEN N E KADAR SAYILARI TOPLAYAN KODU YAZINIZ

// const n = +prompt("enter your number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// console.log(` toplam:${sum}`);

// const adet = prompt("kaç adet sayı istersiniz");
// for (let sayaç = 1; sayaç <= adet; sayaç++) {
//   const rastgelesayı = Math.round(Math.random() * 100);
//   console.log(`${sayaç}.sayınız:${rastgelesayı}`);
// }

// !GİRİLEN SAYININ ASAL SAYI OLUP OLMADIĞINI KONTROL EDEN UYGULAMAYI FOR DÖNGÜSÜ İLE YAZINIZ.......

// let sayı = +prompt("lütfen asallığı kontrol edilecek sayıyı giriniz");

// let sonuç = true;
// for (let i = 2; i <= Math.floor(sayı / 2); i++) {
//   if (sayı % i == 0) {
//     sonuç = false;
//     console.log(`girdiğiniz sayı:, ${sayı} asal değildir`);
//     break;
//   }
// }
// if (sonuç) {
//   alert(sayı + "asaldır");
//   console.log(`girdiğiniz sayı:, ${sayı} asaldır`);
// }

// ?adeti rakamsal olarak belli olan durumlarda for sintax ı daha pratiktir.
// !karmaşık koşulların döngüsü iterasyonu için while döngüsü do-while daha kolaydır
// let sayaç = 1;
// while (sayaç <= 100) {
//   console.log(`${sayaç}.kişi,ahmet`);
//   sayaç++;
// }

// ?ÖRNEK: KULLANICIDAN 0-100 ARASINDA BİR NOT İSTEYEN VE GİRİLEN NOT 0-100'DEN FARKLI İSE KULLANICIYI UYARARAK YENİDEN 0-100 ARASINDA NOT GİRİLMEYE ZORLAYAN KODU WHİLE DÖGÜSÜ İLE YAZINIZ

// let not = +prompt("lütfen 0-100 arasında notunuzu giriniz");
// while (not < 0 || not > 100) {
//   console.log("not 0 dan küçük veya 100den büyük olamaz");
//   not = +prompt("lütfen 0-100 arasında notunuzu giriniz");
// }
// console.log("notunuz:", not);
// * 1 den 10 a kadar çift sayıları yazdırınız while döngüsü
// let sayaç = 1;
// while (sayaç <= 10) {
//   if (sayaç % 2 == 0) {
//     console.log(sayaç);
//   }
//   sayaç++;
// }
// * 1 den 10 a kadar tek sayıları yazdırınız while döngüsü
// let tek = 1;
// while (tek <= 10) {
//   if (tek % 2 == 1) {
//     console.log(tek);
//   }
//   tek++;
// }

// !DO WHİLE DÖNGÜSÜ İLE WHİLW DÖNGÜSÜ ARASINDAKİ FARK WHİLW DÖNGÜSÜ KOŞULU İLK GİRİŞTE KONTROL EDER............................. DO-WHİLE İSE EN SON KONTROL EDER..

// let not;
// do {
//   not = +prompt("lütfen 0-100 arasında notunuzu giriniz");
//   if (not < 0 || not > 100) {
//     alert("not 0 dan küçük veya 100den büyük olamaz");
//   }
// } while (not < 0 || not > 100);
// console.log("notunuz:", not);

// let sayac = 1;
// let rasgele = Math.floor(Math.random() * 100) + 1;

// let tahmin = prompt("Lütfen 1 ile 100 arasında bir tahmin yapınız");

// while (tahmin != rasgele && sayac < 5) {
//   sayac++;
//   if (tahmin > rasgele) alert("Lütfen daha küçük bir sayı atınız");
//   else if (tahmin < rasgele) alert("Lütfen daha büyük bir sayı atınız");

//   tahmin = prompt("Lütfen 1 ile 100 arasında başka bir tahmin yapınız");
// }

// if (sayac < 5) alert("Tebrikler! " + (sayac + 1) + ". denemede buldunuz");
// else alert("Bilemediniz :( Doğru cevap " + rasgele + " olacaktı");

// !  FONJSİYONLAR
// ?fonksiyon deklerasyon
// function yazdırMerhaba() {
//   console.log("merhaba FS!14");
// }
// yazdırMerhaba(); //*invoke çağırma
// yazdırMerhaba();

// function yazdırParametre(name) {
//   console.log("merhaba", name);
// }
// yazdırParametre("FS15");
// yazdırParametre("FS16");

// function calculate(name, yıl) {
//   const age = new Date().getFullYear() - yıl;
//   console.log(`${name} is ${age} ears old`);
//   return age;
// }
// calculate("ahmet", 1990);
// calculate("ismet", 1930);

// function add(num1, num2) {
//   result = num1 + num2;
//   return result;
// }
// const sum1 = add(5, 9);
// const sum2 = add(8, 16);

// console.log(sum1, sum2);

// function isEvenorODD(num) {
//   if (num % 2 === 0) {
//     return "EVEN";
//   } else {
//     return "ODD";
//   }
// }

// function isEvenorODD(num) {
//   return num % 2 === 0 ? "EVEN" : "ODD";
// }

// const num = prompt("please enter your number:");
// console.log(`${num} is ${isEvenorODD(num)}`);

// !EXPRESSİON
// const yazdır = function (message) {
//   console.log(message);
// };
// yazdır("hello fs14");

// let oddEven = function (number) {
//   number = prompt("bir ssayı giriniz");
//   return number % 2 === 0 ? "EVEN" : "ODD";
// };

// console.log(`girdiğiniz sayı `, oddEven());

// console.log(oddEven(5));
// console.log(oddEven(8));
// !ARROW FUNCTİON
// ? SYNTAXI  CONST KAREAL =(X)=>X*X

// const kareAl = (num) => num * num;
// console.log("kare", kareAl(4));

// const topla = (sum1, sum2) => sum1 + sum2;
// console.log("toplam", topla(5, 7));

// const findBiggest = (n1, n2, n3) => {
//   let biggest = n1;
//   if (n2 >= biggest) {
//     biggest = n2;
//   }
//   if (n3 >= biggest) {
//     biggest = n3;
//   }
//   return biggest;
// };
// console.log("en büyük sayı", findBiggest(1, 2, 5));

//?ÖRNEK........ DOĞUM TARİHİNİ PARAMETRE OLARAK ALAN VE ANA PROGRAMA YAŞI HESAPLAYIP DÖNDÜREN FONKSİYONU YAZINIZ

// const calculateAge = (year) => new Date().getFullYear() - year;
// console.log(`age: ${calculateAge(1995)}`);

// ?SİLİNDİRİN HACMİNİ BULUNU HACİM =Pİ*R*R*H
// const h = +prompt("h:");
// const r = +prompt("r:");
// const volume = (radius, height) => Math.PI * radius * radius * height;
// console.log("volume", volume(r, h));

// ! fonksiyonlar2 1.56 da kaldım

// ?girilen sayının faktöriyelini hesaplayan programı fonksiyonlarla yazınız
// *FİBONACCİ  n!=n*(n-1)!,,,,,  fakto(5)=5*4*3*2*1

// *döngülerle yapıldı
// const fakto = (n) => {
//   let f = 1;
//   for (let i = n; i > 1; i--) {
//     f = f * i;
//   }
//   return f;
// };
// const number = +prompt("n");
// number < 0 ? alert("number should be bigger than zero"):
// console.log(`fakto(${number}) = ${fakto(number)}`);

// // ?

// !  RECURSİON FONKSİYONLAR (KENDİ KENDİNİ ÇAĞIRAN FONKSİYONLAr

// const fakto = (n) => {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * fakto(n - 1);
//   }
// };
// const number = +prompt("n");
// number < 0
//   ? alert("number should be bigger than zero")
//   : console.log(`fakto(${number}) = ${fakto(number)}`);

// ?F(n) = F(n - 1) + F(n - 2) fibonacci

// const fibo = (n) => {
//   let f = 0;
//   if (n === 0) {
//     return 0;
//   } else if (n == 2) {
//     return 1;
//   } else {
//     let f = fibo(n - 1) + fibo(n - 2);
//   }

//   return f;
// };
// const number = +prompt("n");
// console.log(`${fibo(number)}`);

// let istenenFibonacciSayisi = prompt(
//   "Kaçıncı fibonacci sayısını öğrenmek istiyorsunuz?"
// );
// let sayi1 = 0;
// let sayi2 = 1;
// let toplam;
// let fibonacciSayilari = [];

// for (let i = 0; i < istenenFibonacciSayisi; i++) {
//   toplam = sayi1 + sayi2;
//   sayi1 = sayi2;
//   sayi2 = toplam;
//   fibonacciSayilari.push(toplam);
// }

// // Birinci Yöntem
// console.log("Fibonacci (" + istenenFibonacciSayisi + ") : " + toplam);
// // İkinci Yöntem
// console.log(`Fibonacci (${istenenFibonacciSayisi}) : ${toplam}`);
// // Fibonacci Sayıları
// console.log("Fibonacci Sayıları : " + fibonacciSayilari);

// ! ..........string methods..........
// ?CONCAT BİRLEŞTİRME
// let str1 = "clarusway";
// let str2 = "hello";
// console.log(str1.concat(str2));

// const myName = "noah adams";
// console.log(myName.toUpperCase());

// let yourName = "mahmut";
// yourName = yourName.toUpperCase();
// console.log(yourName);

// //  ?örnek iki stringi eşit veya değil diye kıyaslayarak sonucu döndüren fonksiyonu yazınız

// const eşitmi = (str4, str5) => {
//   return str4.toLocaleUpperCase() === str5.toLocaleUpperCase()
//     ? `${str4} ile ${str5} eşittir`
//     : `${str4} ile ${str5} eşit değildir`;
// };
// console.log(eşitmi("merhaBa", "MERHABA"));

// //! LOCALLECOMPARE
// const str6 = "full stack path and ds path";
// console.log(str6.length);
// console.log(str6.charAt(str6.length - 1));

// const word = "To be or not to be,that is the question";
// console.log(word.includes("to be")); //*true veya false döner case senstive dir
// console.log(word.includes("That")); //*false
// console.log(word.includes(""));

// let oku = "oku baban gibi,saf olma";
// console.log(oku.replace("saf olma", "akıllı ol"));

const isimler = ["ahmet", "mehmet", "mahmut", "can"];
console.log(isimler);

const diller = new Array("c++", "javascript", "go", "ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! array off
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of("deneme");
console.log(veri);

// ?DİZİDEN VERİ OKUMA-YAZMA (İNDİSLEME)
console.log(diller[1]);
const go = diller[3];
console.log(go);
console.log(isimler[isimler.length - 1]);
console.log(isimler.at(-1));

// !diziye veri yazma
// const isimler = ["ahmet", "mehmet", "mahmut", "can"];
isimler[1] = "saffet";
console.log(isimler);

numbers[numbers.length - 1]++;
console.log(numbers);

const yaşlar = [22, 44, 55];
const kişiler = ["ahmet", "can", 2022, 2022 - 1990, true, yaşlar];
console.log(kişiler);
// * kişiler dizisinin bulunan 55 yaşını yazınız
const yaş55 = kişiler[5][2];
console.log(yaş55);
// *kişiler dizisindeki yaşlar dizisindeki 44 yaşını 1 azaltınız
kişiler[5][1]--;
console.log(kişiler);

// !DİZİYİ DEĞİŞTİREN MUTATOR METOTLAR
// ? POP(),PUSH(),REVERSE(),SHİFT(),UNSHİFT(),SORT(),SPLİCE()

const arabalar = ["BMW", "MERCEDES", "FİAT", "ANADOL"];
// !POP()METHODU SONDAN BİR ELEMENTİ ÇIKARIR
const silinen = arabalar.pop();
console.log(arabalar, silinen);

// !push() sona bir eleman ekler dizinin eleman sayısını döndürür
const n = arabalar.push("citroen");
console.log(arabalar, n);

// !unshift dizinin 0 .indexsine eleman ekler ve dizinin son eleman sayısını döndürür
const n1 = arabalar.unshift("audi");
console.log(arabalar, n1);
// !shift() dizinin 0.indexsini siler ve silinen elemanı döndürür
const audi = arabalar.shift();
console.log(arabalar, audi);
// !splice metodu ekleme
// ? 1.parametre eklenecek indis numarası
// ?2.parametre 0 ise araya ekler,1 ise üzerine yazar yani silip yazar
// ?3.parametre yeni eklenecek veridir
arabalar.splice(1, 0, "passat");

arabalar.splice(3, 1, "honda");
console.log(arabalar);

// ! reverse  dizinin tamamını ters çevirir
arabalar.reverse();
console.log(arabalar);
// !sort()diziyi alfabetik olarak sıralar aski tablosuna göre sıralar sayılarda karışır
const sayılar = [2, 111, 3, 22, 1, 11, 5, 7, 6];
sayılar.sort();
console.log(sayılar); //*askiye göre sıraladığı için hatalı sıralama yaptı

sayılar.sort((a, b) => a - b); //*sort methodu içine bu şekilde fonksiyon yazılınca döngüye girip sıralama yapar küçükten büyüğe sıralamak için b-a yazılır
console.log(sayılar);
// !fill doldurma yapar
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

// !  DİZİ ERİŞİM METHOTLARI
const sayılar1 = [3, 5, 2, "2", "üç", 2, "beş", 5];
//*includes
console.log(sayılar1.includes(5)); //?içerir mi diye aratır true,false döner case senstiv dir
console.log(sayılar1.includes("5")); //*false

//*indexof ---lastindexof
//? ilk gördüğü indisteki elemanı ve son elemanı yazdırır

//*** */ every() tüm diziyi itere eder (yani tek tek kontrol eder döngü) tüm elemanlar için test başarılı ise true döndürür içerisine fonksiyon yazılabilir

// const yaşArray = [18, 22, 34, 78, 81];
// const check = yaşArray.every((yaş) => yaş >= 18);
// check
//   ? console.log("sizideki herkesin yaşı 18den büyüktür")
//   : console.log("dizide 18 yaş altı vardır");
// ?..............................................
// ************************************************
// !ARRAY LOOPS Arraylerdeki iterasyon döngüler
const rakamlar = [-5, 15, 22, -4, 45, 78, 25];

let toplam = 0;
for (let i = 0; i < rakamlar.length; i++) {
  toplam += rakamlar[i];
}
console.log(toplam);

const negatifler = [];
const pozitifler = [];
const dizileriAyır = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizileriAyır(rakamlar);
console.log(negatifler);
console.log(pozitifler);
console.log(rakamlar);

let toplama = 0;
const notlar = [55, 77, 23, 89, 100];
for (let i = 0; i < notlar.length; i++) {
  toplama += notlar[i];
}
console.log("ortalama:", toplama / notlar.length);

// ?for in döngüsü ******

const adlar = ["ahmet", "mehmet", "elif", "mahmut"];
const soyadlar = ["öztürk", "yılmaz", "su", "çalı"];

const birleştir = (x, y) => {
  let adveSoyadlar = [];
  for (let i in x) {
    adveSoyadlar[i] = `${x[i]} ${y[i]}`;
  }
  return adveSoyadlar;
};
console.log(birleştir(adlar, soyadlar));

// * soru ; öğrenciler dizisinde öğrenci isimleri saklanmaktadır.öğrencileri aramımızı sağlayacak ve aranılan öğrenciden ne kadar sayıda bulunduğunu ana programa döndürücek bir fonksiyonu yazınız.eğer aranılan isimde öğrenci yok ise fonksiyon öğrenci bulunamadı döndürülmelidir

const öğrenciler = [
  "ahmet",
  "tarık",
  "ahmet",
  "galip",
  "mehmet",
  "elif",
  "mahmut",
  "mehmet",
];

// const yoklama = (arr, search) => {
//   let counter = 0;
//   for (let i in arr) {
//     if (search === arr[i]) {
//       counter++;
//     }
//   }
//   if (!counter) {
//     return `${search} can not be found`;
//   } else {
//     return `${search} found ${counter} times`;
//   }
// };

// const name = prompt("please enter name").toLowerCase();
// console.log(yoklama(öğrenciler, name));

// !for off

const students = [
  "ahmet",
  "tarık",
  "ahmet",
  "galip",
  "mehmet",
  "elif",
  "mahmut",
  "mehmet",
];

// const findStudentsof = (arr, search) => {
//   let counter = 0;
//   for (let item of arr) {
//     //*ternary ile
//     // search ===item ? counter:null
//     //*short-circuit ile && => koşul doğru ise (true) ifadeyi çalıştırır
//     search === item && counter++;
//     //*short-circuit ile || => koşul yanlış ise (false) ifadeyi çalıştırır
//     // search === item || counter--;
//   }
//   if (!counter) {
//     return `${search} can not be found`;
//   } else {
//     return `${search} found ${counter} times`;
//   }
// };
// const studentName = prompt("please enter name").toLowerCase();
// console.log(findStudentsof(students, studentName));

// !FOREACH METHODU void metottur herhangi bir değer döndürmez return yoktur

// ?DİZİDEKİ HER BİR FİYATI KONSOLA YAZDIRINIZ

const fiyatlar = [100, 250, 50, 89];
fiyatlar.forEach((fiyat) => console.log(fiyat));

// *örnek2 toplamını yazınız
let sum = 0;
fiyatlar.forEach((fiyat) => (sum += fiyat));
console.log("sum:", sum);

// !map

// *örnek bir dizideki tüm isimleri büyük harf ile yazınız
let names = [
  "mustafa",
  "ahmet",
  "tarık",
  "ahmet",
  "Galip",
  "mehmet",
  "elif",
  "Mahmut",
  "mehmet",
];

const bignames = names.map((name) => name.toUpperCase());
console.log(bignames, names);

const dolar = 18.19;
const euro = 18.23;
const tlPrices = [100, 150, 50, 80];
const euroPrices = tlPrices.map((tl) => Number((tl / euro).toPrecision(3)));
console.log(euroPrices);
const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));
console.log(dolarPrices);

// *örn:maaşı 10000den büyük olanları ayrı bir diziye saklayalım
const salaries = [5500, 8000, 6500, 9000, 10000, 25000];

const biggerThan = salaries.filter((salary) => salary >= 10000);
console.log(biggerThan);

// *örn:maaşı 9000den büyük olanları ayrı bir diziye saklayalım maaşlara 9 binden az olan maaşalra %10 zam yapalım
const biggerthan9000 = salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)));

console.log(biggerthan9000);

salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)))
  .forEach((s) => console.log(s));

// !....**********REDUCE***************
array = [4, 3, 2, 1];
const result = array.reduce((sum, val) => sum + val, 0);
console.log(result);
const maaş = [5500, 8000, 6500, 9000, 10000, 25000];
const toplamMaaş = maaş.reduce((toplam, değer) => toplam + değer, 0);
console.log(toplamMaaş);
// ?maaşı 6 bin ile 10bin arası maaşlara 10% zam yapalım.bu maaşların toplamını hesaplayınız
const zamlıMaaşToplamı = maaş
  .filter((m) => m >= 6000 && m <= 10000)
  .map((m) => m * 1.1)
  .reduce((t, m) => t + m);
console.log("zamlı maaşlar:", zamlıMaaşToplamı);

// !EVERY
// ?TÜM DİZİYİ İTERE EDER VE ALDIĞI CALLBACK FONKSİYONUNA GÖRE TEST GERÇEKLEŞTİRİR.TÜM ELEMANLAR İÇİN TEST BAŞARILI İSE TRUE AKSİ TAKDİRDE FALSE DÖNER dizideki tüm elemanlar için true gelmesi gerekir

const ages = [18, 22, 78, 34, 79, 15];
const check = ages.every((age) => age >= 18);
check ? console.log("all ages over 18") : console.log("sum are under 18");

// !some
// ?TÜM DİZİYİ İTERE EDER VE ALDIĞI CALLBACK FONKSİYONUNA GÖRE TEST GERÇEKLEŞTİRİR.en az 1 eleman İÇİN TEST BAŞARILI İSE TRUE AKSİ TAKDİRDE FALSE DÖNER dizideki 1 eleman  true gelirse true döner
const over80 = ages.some((a) => a >= 80);
console.log(over80); //*false döner

// !**********!  OBJECTS *********///////////
// ?OBJE OLUŞTURMA YÖNTEMİ
// ? 1. OBJECT LİTERAL YÖNTEMİ (EN ÇOK KULLANILAN YÖNTEMDİR)
const car = {
  brand: "mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};
console.log(car);

//? OBJENİN OKUNMASI (READ) 1.YÖNTEM . NOTASYONU
console.log(car.brand); //*  . (nokta) notasyonu ile çağrılır
console.log(car.color[0]); //* pink gelir array içindeki elemanı indeks ilee çğırdık
car.color.forEach((c) => console.log(c)); //*array dizisini yazdırdık
console.log(car.Engine); //? case senstivy dir büyük harf ile olmadığı için   UNDEFİNED DÖNDÜ

// * OBJE YAZMA DEĞERİNİ DEĞİŞTİRME
car.speed = 7;
car.color = "morcivert";
car.class = "E";
console.log(car);
// !2.YÖNTEM
// *SQUARE BRACKET YÖNTEMİ İLE OKUMA []
//* BU YÖNTEM İLE KEY İSİMLERİNİN DEĞİŞKENLERDE SAKLANMASINA İZİN VERDİĞİ İÇİN DİNAMİK OLARAK OBJE ERİŞİMLERİNDE KULLANILIR..
console.log("Engine:", car["engine"]); //? obje adı ["key adı"]

// const myKey = prompt(
//   "araba ile ilgili neyi öğrenmek istersiniz:speed,color,engine"
// );
// alert(car[myKey]);

// ? OBJE OLUŞTURMA
// ? 2. YÖNTEM OBJECT () CLASS INDAN NEW OPERATÖRĞ İLE

const myCar = new Object();
myCar.brand = "ferrari";
myCar.model = 2022;
myCar.speed = 7;
console.log(myCar.brand);
console.log(myCar["brand"]);

// ? OBJE OLUŞTURMA
// ? 3. YÖNTEM OBJECT CONSTRUCTOR YÖNTEMİ KULLANARAK ( OOP İLE ) İLE

function Personel(id, name, age, salary) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
}
const person1 = new Personel("123456789", "ahmet can", 33, 30000);
const person2 = new Personel("1244456789", "mahmut", 35, 50000);
console.log(person1);
console.log(person2);

// ! ===========OBJECT METOTLARI============

const personel = {
  name: "Ahmet",
  surName: "canan",
  dob: 1990,
  salary: 30000,
  drvingLicense: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  //   summary: () => {
  //     console.log(this); //* window objesini verir
  //     return `${this.name} is ${this.calculateAge()} years old`
  // }
  //?arrow function obje tanımlamasında kullanılmaz.           Uncaught                SyntaxError: Unexpected identifier 'summary' (at index.js:700:1)

  summary: function () {
    console.log(this); //* window objesini verir
    return `${this.name} is ${this.calculateAge()} years old`;
  },
};
//! NOT : ARROW FONKSİYONLARI ÖZELLİKLE CALLBACK FONKSİYONU OLARAK KULLANILMAK VE BU FONKSİYONLARDA THİS KEYWORD KULLANIM GEREKSİNİMİNŞ KALDIRMAK İÇİN GELİŞTİRİLMİŞTİR.
//? LEXİCAL SCOPE CONTEXTE SAHİPTİRLER DOLAYISIYLA BİR OBJE FONKSİYONU  OLARAK KULLANILIRSA THİS KELİMESİ GLOBAL SCOPE 'U (WİNDOW NESNESİNİ) GÖSTERİR
// !BUNU ENGELLEMEK İÇİN (FUNC. EXPERESSİON VEYA DECLARATİON) YÖNTEMLERİ KULLANILABİLİR.
console.log(personel.name + " " + personel.surName);
console.log("Age:", personel.calculateAge());
console.log(personel.summary());

// !===========================================
// ***** JSON => JAVASCRİPT OBJECT NOTATİON
// !===========================================

const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
];

console.log(team);
console.log(team[1]);
console.log(team[1].name); //? Mary
console.log(team[2].age); //? 20

console.log("************");

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const personelAges = team.map((person) => person.age + 1);
console.log(personelAges);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});

//? Alternative way
const teamFullName1 = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

console.log(teamFullName1);

//* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.
team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

//* Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.
const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);

//* Ornek6: ortalama yasi hesaplayiniz.
const avgAges = team.reduce((sum, person) => sum + person.age, 0) / team.length;
console.log("AVE AGE:", avgAges);

// ! NEW GENARATİON OPERATİON
// ?  **************DESRUCTURİNG (OBJECT) ****************
const car1 = {
  brand: "bmw",
  model: 2020,
  engine: 2000,
  colors: ["pink", "blue"],
};
//?okuma yöntemleri
// * 1.yöntem . notasyonu
console.log(car1.brand);

//*2.yöntem [] square bracket
console.log(car1["model"]);

// !3.yöntwm destructure  objeleri parçalama
const { brand: name, engine, colors } = car1;
console.log(engine, colors, name);

const { model } = car1;
console.log(model);

//* örn: nested

const araba = {
  araba1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  araba2: {
    name: "MERCEDES ",
    model: 2022,
    engine: 2.0,
  },
  araba3: ["anadol", "togg", "devrim"],

  araba4: "kağnı",
};
let { araba1, araba2, araba3, araba4 } = araba;
console.log(araba1, araba2);

const { name: c2Name, model: c2model } = araba1;
const { name: c3Name, model: c3model } = araba2;
console.log(c2Name, c2model);
console.log(c3Name, c3model);

//* alternatif
const {
  araba1: { namearaba1, modelaraba1, enginearaba1 },
  araba2: { namearaba2, modelaraba2, enginearaba2 },
} = araba;
console.log(araba1);

// ?örn
const team1 = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
];
team1.forEach((t) => console.log(t));
team1.forEach((t) => console.log(t.name));
console.log("***********************");
// ?KLASİK YÖNTEM
// ?KLASİK YÖNTEM
console.log("***********KLASİK YÖNTEM İLE OKUMA");

team1.forEach((t) => {
  console.log("NAME:", t.name);
  console.log("SURNAME:", t.surname);
  console.log("JOB:", t.job);
  console.log("AGE:", t.age);
  console.log("****************************");
});
//? DESRUCTURİNG YÖNTEMİ
console.log("**********DESRUCTURİNG İLE OKUMA******************");
team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("NAME:", name);
  console.log("SURNAME:", surname);
  console.log("JOB:", job);
  console.log("AGE:", age);
  console.log("****************************");
});

const getProduct = () => {
  return {
    id: "123",
    PName: "nıke",
    price: 300,
    stock: 1000,
  };
};
console.log(getProduct());

//*functionun döndürdüğü obje doğrudan destr.yapılabilir.
let { PName, price, stock, id } = getProduct();
console.log("PRODUCT NAME:", PName, "PRICE:", price);

stock = stock - 100;
console.log(stock);

//****************************************** */
const data = {
  id: "123",
  PName: "nıke",
  price: 300,
  stock: 1000,
};
// ?normmal yöntem
// const print = (data) => {
//   const { id, PName, price, stock } = data;
//   console.log(PName, price);
// };

// ! havada destrc. fonksiyon parametre yerine direk yazılarak destrc.yapılır

const print = ({ id, PName, price, stock }) => {
  console.log(PName, price, id, stock);
};

print(data);

// !DESTRUCTURİNG ARRAY
const name1 = ["ahmet", "mehmet", "ismet", "saffet"];
const ismet = name1[2];
console.log(ismet);

const [ahmo, ismo, safo] = name1;
console.log(ahmo, ismo, safo);

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: Array
const araclar = ["bmw", "merso", "ferarri", "rover", "lambo"];

const [araç1, araç2, araç3, ...geriKalanlar] = araclar;
console.log(araç1);
console.log(geriKalanlar);

//* REST: Object

const kisi = {
  ad: "Canan",
  soyad: "Cano",
  yas: 33,
  meslek: "tester",
};

const { meslek, yas, ...isim } = kisi;

console.log(meslek, yas);
console.log(isim);
console.log(kisi);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const topla = (a, b) => a + b;

console.log("SONUC:", topla(2, 5, 10, 4));

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye)
//? cevirmiş olduk.

const toplaminiAl = (...sayilar) => {
  console.log(sayilar);
  return sayilar.reduce((t, v) => t + v, 0);
};
console.log("SONUC:", toplaminiAl(2, 5, 10, 4, 6, 8));

//*==================================================
//*  SPREAD (...)
//* =================================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.
const ucanAraclar = ["drone", "heli", "ucak"];
const karaAraclari = ["Tir", "Araba", "Kamyonet", "Bisiklet"];

const tasitlar = [ucanAraclar, karaAraclari];
console.log(tasitlar);
console.log(tasitlar[0][1]);

const tasitlar1 = [...karaAraclari, "Kamyon", ...ucanAraclar];
console.log(tasitlar1);

const cümle = "olmak yada olmamak";
const karakter = [...cümle];
console.log(karakter);

console.log("max:", Math.max(1, 3, 4, -1, 5));
const rakam = [23, 45, 66, 77, 12, -1];

// ?Math.min için kullandık  arrayi açmış olduk
console.log("min:", Math.min(...rakam));

// ?array copy
const myNumbers = [4, 5, 6, [11, 22]];
const herNumbers = [1, 2, 3, ...myNumbers];
const hisNumbers = [...herNumbers];

console.log(herNumbers, myNumbers);
console.log(hisNumbers);

hisNumbers.push(7);
myNumbers.push(77);

console.log("MY:", myNumbers);
console.log("HER:", herNumbers);
console.log("HIS:", hisNumbers);

myNumbers[3][1] = 44; //? spread kullanılsa dahi nested olan alanlar deep copy olmaz.

//? Sıg Kopyalama
const theirNumbers = hisNumbers;

theirNumbers.push(8);
console.log(theirNumbers, hisNumbers);

//? Object copying

const firstObj = { a: 1, b: 2, c: 3 };
const secondObj = { a: 2, d: 3, c: 4 };

const copiedFirstObj = { ...firstObj };
console.log(copiedFirstObj);

copiedFirstObj.a = 44;
//? nesting olmadigi icin deep copy gibi davranir.
console.log(copiedFirstObj, firstObj);

const combinedObjs = { ...secondObj, ...firstObj }; //*sonda yazılanın value değerini alır
console.log(combinedObjs);

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log("MAAAS:", people.person3.salary);

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let p in people) {
  // console.log(p)
  // console.log(people[p]) //? square bracket notasyon
  console.log(people[p].salary); //? square bracket notasyon
}

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

console.log("****************");
for (let key of Object.keys(people)) {
  console.log(key);
}

console.log("****************");
//? people objesindeki tum salary 'leri yazdir
for (let v of Object.values(people)) {
  console.log(v.job);
  // console.log(v["salary"]);
}
