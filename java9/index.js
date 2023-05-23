// const str = "Hello World";
// console.log(str.length);
// console.log(str[6]);

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }
// // ?tersten yazdırmak için

// const str1 = "Clararusway";
// for (let i = 0; i < str1.length; i++) {
//   console.log(str1[i]);
// }

// for (let i = str.length - 1; i >= 0; i--) [console.log(str1[i])];

// alert("1-ders\n 2-ders\n3ders");
// ?yazılan string arasında boşluk bırakmak için ters slaş ve n ile yazılır.\n veya bactik ile yazılırsa enter ile aşağı dizile bilir

// !SLİCE METODU İLE
// let str3 = "clarusway";

// let str4 = str3.slice(-3);
// console.log(str3);
// console.log(str4);

// const str = "orange";

// // ?2 den başla devamını yazdır
// console.log(str.substring(2));
// console.log(str.substring(0, 4));
// console.log(str.substring(4, 0));
// console.log(str.substring(str.length - 4));
// console.log(str);

// // !concat birleştirme

// let greet = "hello";
// console.log(greet.concat(" world"));
// console.log("hello".concat(" world"));

// let isim = prompt("isminiz nedir");
// console.log("merhaba ".concat(isim));

// !includes metodu içerisinde bir harf kelime aratmak için kullanılır true veya false döner
// let str = "clarusway";
// console.log(str.includes("l"));
// console.log(str.includes("l", 2));

// ?    index of ile aratma ile aratınca bize index numarsını döner dönüşü ilk bulduğunu getirir -1 vermesi =olmadığı anlamına gelir

// let str = "clarusway";
// console.log(str.indexOf("a"));
// console.log(str.indexOf("a", 3));
// console.log(str.indexOf("l", 3));

// let email = prompt("meail adresinizi giriniz");
// console.log(email.includes("@"));

// !indexof( ) while döngüsü ile içerisinde kaç tane şu kelimeden var aratma

// ?last indexof sağdan sola aratır yoksa -1 yazar
let str1 = "hello john,welcome to clarusway";
console.log(str1.lastIndexOf("o"));
console.log(str1.lastIndexOf("o", 6));
console.log(str1.lastIndexOf("w", 6));
// ?index yani sırası 6 dan sonra w olmadığı için -1 yazar

// !SEARCH ARAMA YAPMAK İÇİN REGEX YÖNTEMİ DENİR BU YÖNTEM İLE / / DÜZ SLASH İLE "" YERİNE KULLANILABİLİR AYRICA /**/İ KOAYRSAK HARF HASSASİYETİNİ KALDIRIR O ŞEKİLDE İLK BULDUĞUNU YAZAR
let str2 = "you do not KNOW what you do not know until you know";

console.log(str2.search("know"));
console.log(str2.search(/know/));
console.log(str2.search(/know/i));

// !byük harf aratmak için
let str3 = "hello World";
const arama = /[A-Z]/;
console.log(str3.search(arama));
// !küçük harfler
let str4 = "hello World1";
const arama1 = /[a-z]/;
console.log(str4.search(arama1));

// ?replace yerini değiştirmek
let str5 = "Mr Brown has a brown house and a brown car";

let neWstr5 = str5.replace("brown", "red"); //? harf hassaiyetinden dolayı sadece küçük harfli olanı değişti
let neWstr6 = str5.replace(/brown/i, "red"); //*harf hassasiyeti kalktı ilk gördüğünü değişti
let neWstr7 = str5.replace(/brown/gi, "red"); //?harf hassasiyeti kalktı ve hepsi değişti
// !replaceAll kullanırsak tümünü değişir

console.log(neWstr5);
console.log(neWstr6);
console.log(neWstr7);

// !split ile string metnini Array fonksiyonuna çevirir

let str8 = "Welcome to:Full Stack";
console.log(str8.split());
//*bu şekide tek elemanlı olarak oluşturur

console.log(str8.split(" "));
//*bu şekilde 4 elemanlı fonksiyon açar
console.log(str8.split(":"));
//?bu şekilde ise : olan yerden itibaren ayırır

// !toLowercase & toUppercase

let str9 = "Welcome to:Full Stack";
console.log(str9.toLowerCase());

console.log(str9.toUpperCase());

let str10 = "ŞAMPİYONLAR ligi";
console.log(str10.toLocaleLowerCase("TR"));
console.log(str10.toLocaleUpperCase("TR"));
//*BU ŞEKİLDE ÖRNEĞİN İNGİLİZCE DE BÜYÜK İ OLMADIĞINDAN DİLİ SEÇEREK BÜYÜK İ YAZDIRILIR

// !trim ile boşlukları temizleriz
let str11 = "  Welcome to:Full Stack  ";
console.log(str11);
console.log(str11.trim()); //?iki taraftaki boşlukları alır
console.log(str11.trimStart()); //?baştaki boluğu keser
console.log(str11.trimEnd()); //?sondaki boşluğu alır

// !STARTSwİTH hangi harf ile kelime ile başlıyor u aratmak için kuulanılır true yada false döner harf hassaityeti vardır index verilerek aratılabilir
let str12 = "clarusway@Clarusway.com is our e-mail adresss";

console.log(str12.startsWith("clarusway"));
console.log(str12.startsWith("Clarusway"));
console.log(str12.startsWith("Clarusway", 10));

// ?chaining metotlar hepsini zincirleme kullanma

let str15 = "    Clarusway Full Stack";
let str16 = str15.trim();
let str17 = str16.slice(0, 9);
let str18 = str17.toUpperCase();
console.log(str18);
// ! chaining ile bu şekilde tek satırda yazabiliriz
console.log(str15.trim().slice(0, 9).toUpperCase());
