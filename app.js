const integers = document.querySelectorAll(".integer");
const displayField = document.querySelector(".display-field");
const equal = document.querySelector(".equal");

const integersArray = Array.from(integers);

let calculation = "";

integersArray.forEach((integer) => {
  integer.addEventListener("click", () => {
    displayField.innerHTML = "" + integer.getAttribute("value");
    calculation += integer.getAttribute("value");
    console.log(calculation);
  });
});

equal.addEventListener("click", () => {
  if (calculation[1] === "+") {
    displayField.innerHTML = Number(calculation[0]) + Number(calculation[2]);
  } else if (calculation[1] === "-") {
    displayField.innerHTML = Number(calculation[0]) - Number(calculation[2]);
  }
});
