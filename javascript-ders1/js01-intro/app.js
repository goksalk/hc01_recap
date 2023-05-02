// console.log("burası localdeki script kısmıdır");

// alert("bu bir alerttir");

// console.log("alertten sonraki komut");
// karar = confirm("emin misiniz E / H");
// console.log(karar);
//

// ? const
console.log("APP JS RUNNİNG");

const pi = 3.14;
console.log(pi);
console.log(typeof pi);
const sayı1 = "3";
console.log(typeof sayı1);

//? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.
let language = "Java";
console.log(language, typeof language);

language = "Javascript";
console.log(language);

language = true;
console.log(language);

language = 3.14;
console.log(language);

let adet;
console.log(adet);
// ?js bir değişkenin türünü atanan değere göre belirler.Eğer atama olmadıysa türü undefined olarak belirlenmiş olur

{
  // !bir blok içerisinde değişken oluşturunca süslü dışında değişemeyiz
  let localDeğişken = 5;
  localDeğişken = localDeğişken + 1;
  console.log(localDeğişken);
}
// console.log(localDeğişken);
//? p.js:46 Uncaught ReferenceError: localDeğişken is not defined
