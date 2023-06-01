const langInput = document.querySelector("#input");

// ?1.ADIM OLUŞTUR
const newP = document.createElement("p");

// const text = document.createTextNode("Bu bir yeni P elementidir");
const text = document.createTextNode(langInput.value);

// ?2.ADIM BAĞLA APPEND
newP.appendChild(text);

console.log(newP);
