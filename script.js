const button = document.querySelector("button");
const numbers = document.querySelectorAll(".numbers span");
const firstcontainer = document.querySelector(".container");
const secondcontainer = document.querySelector(".second");
const parent = document.querySelector(".header");
const reference = parent.children[0];
let rating = undefined;
numbers.forEach((current, i) => {
  current.addEventListener("click", () => {
    numbers.forEach((num) => num.classList.remove("background"));
    rating = current.innerText;
    current.classList.add("background");
  });
});
button.addEventListener("click", () => {
  if (rating) {
    firstcontainer.classList.add("hide");
    let newp = document.createElement("p");
    newp.innerHTML = `you selected ${rating} out of 5`;
    newp.classList.add("rating");
    reference.insertAdjacentElement("afterend", newp);
    secondcontainer.classList.add("nothide");
  } else {
    console.log("error: not selected any number");
  }
});
