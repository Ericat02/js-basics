const undervisere = ["Anders", "Stine", "Allan"];

console.log("Undervisere");

const section = document.querySelector("section");

undervisere.forEach(visNavne);

function visNavne(elm, i) {
  section.innerHTML += `<p>${elm} har index ${i}</p>`;
}
