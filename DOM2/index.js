const langInput = document.querySelector("#input");

// ?1.ADIM OLUŞTUR
const newP = document.createElement("p");

// const text = document.createTextNode("Bu bir yeni P elementidir");
const text = document.createTextNode(langInput.value);

// ?2.ADIM BAĞLA APPEND
newP.appendChild(text);

console.log(newP);

const body = document.querySelector("main");
body.appendChild(newP);

const itemListSection = document.querySelector(".item-list");
itemListSection.before(newP);

newP.id = "paragraf";
newP.className = "par center";

// !setAtrrribute ile id clas değitirme

newP.setAttribute("id", "new-id");
newP.setAttribute("class", "new-class");

const newDıv = document.createElement("div");
newDıv.id = "my-div";

itemListSection.after(newDıv);
newDıv.innerHTML += `
<h2 clas="par center">languages</h2>
<ul>
<li>C++</li>
<li>java</li>
<li>go</li>
</ul>`;
