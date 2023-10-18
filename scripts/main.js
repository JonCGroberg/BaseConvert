import { convertBaseXtoBaseY } from "./calculator.js";
const digitList = "0123456789abcdefghijklmnopqrstuvwxyz";
const input = document.getElementById("input");
const inputs = document.getElementsByName("inputs");
const output = document.getElementById("output");
const outputs = document.getElementsByName("outputs");
const convertIcon = document.getElementById("convertIcon");
const spinnerIcon = document.getElementById("spinnerIcon");
const toggleBtn = document.getElementById("themeToggle");

let inputBase = document
  .querySelector("input[type=radio][name=inputs]:checked")
  .getAttribute("baseValue");
let outputBase = document
  .querySelector("input[type=radio][name=outputs]:checked")
  .getAttribute("baseValue");

const inputBaseHandler = function (e) {
  let newInputBase = e.target.getAttribute("baseValue");
  input.value= convertBaseXtoBaseY(input.value, inputBase, newInputBase);
  inputBase = newInputBase;

  input.setAttribute(
    "oninput",
    "(this.value = this.value.replace(/[^0-" +
      digitList[inputBase - 1] +
      "]/g, ''))"
  );
  calculate();
};

const outputBaseHandler = function (e) {
  outputBase = e.target.getAttribute("baseValue");

  calculate();
};

const calculate = function () {
  output.value = convertBaseXtoBaseY(input.value, inputBase, outputBase);
  //animate conversion icon
  convertIcon.classList.add("visually-hidden");
  spinnerIcon.classList.remove("visually-hidden");
  sleep(300).then(() => {
    convertIcon.classList.remove("visually-hidden");
    spinnerIcon.classList.add("visually-hidden");
  });
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toggleTheme() {
  toggleBtn.classList.toggle("bi-moon-fill");
  toggleBtn.classList.toggle("bi-sun-fill");
  if (document.body.getAttribute("data-bs-theme") == "dark") {
    document.body.setAttribute("data-bs-theme", "light");
  } else {
    document.body.setAttribute("data-bs-theme", "dark");
  }
}

function attachListeners(array, func) {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("change", func);
  }
}

toggleBtn.addEventListener("click", toggleTheme);
attachListeners(inputs, inputBaseHandler);
attachListeners(outputs, outputBaseHandler);
input.addEventListener("input", calculate);
