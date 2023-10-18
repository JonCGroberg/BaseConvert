import { convertBaseXtoBaseY } from "./calculator.js";

// Constants
const digitList = "0123456789abcdefghijklmnopqrstuvwxyz";
const input = document.getElementById("input");
const inputs = document.getElementsByName("inputs");
const output = document.getElementById("output");
const outputs = document.getElementsByName("outputs");
const convertIcon = document.getElementById("convertIcon");
const spinnerIcon = document.getElementById("spinnerIcon");
const toggleBtn = document.getElementById("themeToggle");

// Variables
let inputBase = getInputBase();
let outputBase = getOutputBase();

// Event Handlers
const inputBaseHandler = function (e) {
  const newInputBase = e.target.getAttribute("baseValue");
  updateInputValue();
  setInputBase(newInputBase);

  //regex to set allowed characters to type
  input.setAttribute(
    "oninput",
    "(this.value = this.value.replace(/[^0-" +
      digitList[inputBase - 1] +
      "]/g, ''))"
  );
  calculate();
};

const outputBaseHandler = function (e) {
  const newOutputBase = e.target.getAttribute("baseValue");
  setOutputBase(newOutputBase);
  calculate();
};

// Helper Functions
function getInputBase() {
  return document
    .querySelector("input[type=radio][name=inputs]:checked")
    .getAttribute("baseValue");
}

function getOutputBase() {
  return document
    .querySelector("input[type=radio][name=outputs]:checked")
    .getAttribute("baseValue");
}

function setInputBase(newInputBase) {
  inputBase = newInputBase;
}

function setOutputBase(newOutputBase) {
  outputBase = newOutputBase;
}

function updateInputValue() {
  input.value = convertBaseXtoBaseY(input.value, inputBase, getInputBase());
}

function calculate() {
  output.value = convertBaseXtoBaseY(input.value, inputBase, outputBase);
  animateConversionIcon();
}

function animateConversionIcon() {
  convertIcon.classList.add("visually-hidden");
  spinnerIcon.classList.remove("visually-hidden");
  sleep(300).then(() => {
    convertIcon.classList.remove("visually-hidden");
    spinnerIcon.classList.add("visually-hidden");
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toggleTheme() {
  toggleBtn.classList.toggle("bi-moon-fill");
  toggleBtn.classList.toggle("bi-sun-fill");
  const currentTheme = document.body.getAttribute("data-bs-theme");
  document.body.setAttribute(
    "data-bs-theme",
    currentTheme === "dark" ? "light" : "dark"
  );
}

function attachListeners(array, func) {
  array.forEach((element) => {
    element.addEventListener("change", func);
  });
}

// Event Listeners
toggleBtn.addEventListener("click", toggleTheme);
attachListeners(inputs, inputBaseHandler);
attachListeners(outputs, outputBaseHandler);
input.addEventListener("input", calculate);
