// *document write ile çıktı almak
document.write("Hello world");

console.log("göksal");

console.log({ name: "göksal", surname: "karabulut" });
let a = 5;
let b = 8;

console.log("İki sayının toplamı :", a + b);

console.log("göksal");

alert("ferhatlar ve köpekler giremez");

//?  VAR-LET-CONST

//! SCOPE NEDİR KAPSAM ANLAMINA GELİR

//*GLOBAL SCOPE HER YERDEN ERİŞİLEBİLİR
// *FUNCTİON SCOPE SADECE FUNCTİON SÜSLÜ PARANTEZİ İÇİNDE ERİŞİLEBİLİR
//* BLOCK SCOPE SADECE İF TARZI BLOK PARANTEZ İÇİNDE ERİŞİLEBİLİR

//! Var - Let - Const

//Değişken nedir ?

/*
var/let/const degiskenIsmi = degiskenDegeri;
let sayi =10;
*/

// ?var : function scope -- ram bellekte cok fazla yer kaplar.verilen değer değişebilir
// ?let/const : block scope özelliğne sahiptir.

// function selamVer(){
//     var selam = "Herkese selam"; // function scope
//     if(true){
//         const b = 10;

//     }
//     console.log(b);
//     console.log(selam);
// }

// selamVer();

// var a = 5;
// var a = 10;
// console.log(a);

// if(true){
//     let a  =5;
// let b = 10;

// console.log(a);
// }

// LET & CONST arasındaki fark ?

// const (constant ) : sabit , değişmez

// const a = 10;
// a = 15;
// console.log(a);

//?let const gibi sabit değildir değiştirilebilir
// let b = 5;
// b=7;
// b=12;
// console.log(b);

//!const değişkeni sadece bir kere adlandırılır.verilen değişken değiştirilemez ama değişkene tanımlanan veri değişebilir
// const user = {
//     username :"enes",
//     password: "123"
// }

// user.username="enesbayram";

// console.log(user);
