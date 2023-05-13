console.log("js dosyası bağlandı");

// //*?aritmetiksel operatörler
// var deneme = 5;
// var deneme = 6;

// const num1 = 10;
// const num2 = 69;
// const toplam = num1 + num2;
// console.log(toplam);

// const msg1 = "Hello";
// const msg2 = "World!";

// const mesaj = msg1 + msg2;
// console.log(mesaj);

// const firstName = "Koray";
// const lastName = "Koksal";
// console.log(firstName, " ", lastName);
// const fullName = firstName + " " + lastName; //? + operatörü String Concatenation işlemini de yapar.
// console.log(fullName);

//! Template Literals (Es6 ile gelen bir özellik)
// `merhaba``${değişken} ${değişken2}`;
// `merhaba` hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi `${değişken}` şeklinde yazabiliriz. + yerine daha dinamik bir şekilde stringlerimizi concatenate edebiliriz.

// const fullName2 = `${firstName} ${lastName}`;
// console.log(fullName2);

// const fullName2 = `${firstName} ${lastName}`;
// console.log(fullName2);

// const num3 = "6";
// const num4 = "7";
// console.log(num3 + num4); // 67
// console.log(num3 + 7); // 67. js otomatik tip dönüşümü yaparak buradaki ifadeyi de concatenat etti.
// console.log(7 + num3); // + operatorunde string değişken üstün gelir ve dönmüşümü stringe yapar. 76 çıktısını verdi.
// console.log(typeof (7 + num3)); // string

//! - operatörü

// const x = 55;
// const y = 44;

// console.log(x - y); // 11

// const myNum = "1";
// console.log(x - myNum); // 54. - operatöründe string değişkeni numbera çevirir.
// const yourNum = "one";
// console.log(x - yourNum); // NaN (Not a Number)
// //? String ifadeyi number a dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu NaN döndürüyor.matematiksel olarak belirsiz veya tanımsız bir değeri temsil eder.
// console.log(x - "a"); // NaN

// //! * operatörü

// let carp1 = 7;
// let carp2 = 9;
// console.log(carp1 * carp2); // 63

// console.log("a" * "b"); // NaN
// console.log("a" * 3); // NaN

// console.log("5" * "9"); // 45. karakterler numeric ise numebr gibi davranarak işlemi gerçekleştiriyor.
// console.log(typeof ("5" * "9")); // number

const böl1 = 81;
const böl2 = 9;
console.log(böl1 / böl2);
console.log(böl1 / "9");
console.log(böl1 / "dokuz");
console.log(böl2 / 0);
// ? nan =not a number
// * infinity javascripte sonsuzluk olarak adlandırılır.yukarıdaki işlemde 0 a bölünmeyeceği için infinity yazdı,
console.log(0 / 5);
// ? matematik işlemi 0/5=0 old sonuç çıktı
console.log(0 / -5);
// !sonuç -0 çıktı,

console.log(57 / 5); //11,4 çıktı

//* %mod alma demek kalanı yazar
const mod1 = 57;
const mod2 = 9;
console.log(mod1 % mod2); //3 kalanını verdi

const benimsayım = 967;

const pi = 3.14;
const yarıcap = 9;
const alan = pi * yarıcap ** 2;
console.log(alan);
let artır = 6;
let artırnew = artır++;
console.log(artır);
// console.log(artırnew);
// console.log(artırnew);
// console.log(artır);
// let newSayı = ++artır;
// console.log(artır);
// let newSayı2 = artır++;
// console.log(artır);

// console.log(15 > 5);
// console.log(15 != "15");

console.log(true && true);
