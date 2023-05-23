// const colors = ["Red", "Green", "Blue"];
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);
// console.log(colors[colors.length - 2]);
// console.log(colors[colors.length]);

// //? arayin tipi nedir
// const colors = ["Red", "Green", "Blue"];
// console.log(typeof colors);

// colors[6] = 2;
// console.log(colors);

// ?array metodları
// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// console.log(colors.slice(2, 4));
// console.log(colors.slice(-2));
// console.log(colors.slice(2));
// console.log(colors.slice(8)); //*olmayan indexi çağırınca boş array verir

// console.log(colors.slice(-2, 1));  //*hatalı indexleme boş array verdi

// // !push metodu ile ekleme
// const colors = ["Red", "Green"];
// colors.push("blue");
// let c = "white";
// console.log(colors);

// const car = [`audi`, `bmw`];
// console.log(car.pop());

// const silinen = car.pop();
// console.log(silinen);

// const colors = ["Red", "Green", "Brown"];

// console.log(colors.unshift("purple"));

// // ?shift ilk elemanı siler sildiği elemanı döndürür

// const car1 = [`audi`, `bmw`];
// console.log(car1);

// ?splice
const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];
// console.log(colors.splice(2, 1)); //*2.indexe git 1 eleman sil
// console.log(colors.splice(2));
// console.log(colors);

//? eleman ekleme
// console.log(colors.splice(2, 0, `white`));
// console.log(colors);

// ?eleman değiştirme
console.log(colors.splice(3, 1, `pink`));
console.log(colors);
// ?3.indexe git bir eleman sil pinki ekle

//! concat birleştirme

const color1 = ["red", "green"];
const color2 = ["blue", "orange"];
const color3 = [10, true];
// const joinedArray = color1.concat(color2, color3);
// console.log(joinedArray);

// const str = color1.push(...color2, ...color3);
// console.log(str);
// console.log(color1);
// !reverse metodu
colors.reverse();
console.log(colors);

// ?join methodu
// const arr = ["C", "l", "a", "r", "u", "s", "w", "a", "y"];

// console.log(arr.join()); // C,l,a,r,u,s,w,a,y

// console.log(arr.join("")); // Clarusway

// console.log(arr.join("-")); // C-l-a-r-u-s-w-a-y
// console.log(arr);
// // ?

//? sort sıralama
const arr = [55, 5, 22, 2, 11, 1, 111];
// ascending sorting
arr.sort((a, b) => a - b);
console.log(arr); // [ 1, 2, 5, 11, 22, 55, 111 ]

// descending sorting
arr.sort((a, b) => b - a);
console.log(arr); // [ 111, 55, 22, 11, 5,  2,  1 ]

const colors1 = ["Red", "Green", "Blue", "Yellow", "Brown"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
