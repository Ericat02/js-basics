const undervisere = ["Anders", "Stine", "Allan"];

// console.log("Undervisere");

const section = document.querySelector("section");

undervisere.forEach(visNavne);

function visNavne(elm) {
  section.innerHTML += `<p>${elm} er sød </p>`;
}
