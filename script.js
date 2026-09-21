const undervisere = ["Anders", "Stine", "Allan"];
console.log("Undervisere");

const section = document.querySelector("section");

undervisere.forEach(visNavne);

function visNavne(element) {
  console.log(element);
}
