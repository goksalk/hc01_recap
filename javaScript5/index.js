function yazdırMerhaba() {
  console.log("Merhaba FS14");
}
yazdırMerhaba();
yazdırMerhaba();
yazdırMerhaba();

function yazdırParametre(message, name = "Cohort14") {
  console.log(message, name);
}
yazdırParametre("hello", "FS15");

yazdırParametre("salut", "FS16");
yazdırParametre("FS16");

yazdırParametre("Hallo");

function calculate(name, yob) {
  const age = new Date().getUTCFullYear() - yob;
  console.log(`${name} is ${age} years old`);
  return age;
}
console.log(new Date());
calculate("ahmet", 1990);
calculate("ismet", 1890);

console.log(calculate("ahmet", 1990));
const ismetAge = calculate("ismet", 1890);

console.log("Ismet's Age:", ismetAge);

//*ÖRNEK4

function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function addShort(num1, num2) {
  return num1 * num2;
}

const result1 = add(3, 5);
const result2 = add(5, 9);
const result3 = addShort(5, 9);

console.log(result1, result2);
console.log(result3);

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.
function isEvenorOdd(num) {
  if (num % 2 == 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
// ?alternatif yöntem değişken atayarak
function isEvenorOdd(num) {
  let result;
  if (num % 2 == 0) {
    result = "EVEN";
  } else {
    result = "ODD";
  }
}

//  ?ternary yöntemi ile
function isEvenorOdd(num) {
  return num % 2 === 0 ? "EVEN" : "ODD";
}

const num = prompt("please enter a number:");

isEvenorOdd(num);
console.log(`${num} is ${isEvenorOdd(num)}`);
