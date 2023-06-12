// let yaş = +prompt("lütfen yaşınızı giriniz");
// if (yaş >= 18) {
//   console.log("ehliyet alabilir");
// } else {
//   console.log("ehliyet alamaz");
// }

// yıl = +prompt("çalışma yılınızı giriniz");
// maaş = +prompt("maaşıınızı giriniz");

// if (yıl >= 10) {
//   maaş = maaş * 1.6;
// } else if (yıl >= 3) {
//   maaş = maaş * 1.3;
// } else if (yıl >= 5) {
//   maaş = maaş * 1.4;
// } else {
//   console.log(`MAAŞINIZ ,${maaş}`);
// }

// console.log(`MAAŞINIZ ,${maaş}`);

const not = +prompt("please enter your grade");
let result = "";
if (not < 40) {
  result = "FF";
} else if (not < 50) {
  result = "dd";
} else if (not < 60) {
  result = "dc";
} else if (not < 70) {
  result = "cc";
} else if (not < 80) {
  result = "bb";
} else if (not < 90) {
  result = "ba";
} else if (not < 95) {
  result = "AA";
} else (not >0 ) {
  
  alert("lütfen notunuzu 0-100 arasında giriniz");
}

console.log(`NOTUNUZ:,${result}`);
