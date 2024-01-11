const integers = document.querySelectorAll(".integer");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");

const integersArray = Array.from(integers);
console.log(integersArray);

let calculation = [];
let total = "";

integersArray.forEach((integer) => {
  integer.addEventListener("click", () => {
    display.innerHTML = integer.textContent;
    console.log(calculation);
    calculation.push(integer.textContent);
    console.log(calculation);
    if (calculation.length === 3) {
      total = Number(calculation[0]) + Number(calculation[2]);
      calculation = [];
      calculation[0] = total;
    }
  });
});

equal.addEventListener("click", () => {
  display.innerHTML = total;
});
