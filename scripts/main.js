
import {convertBaseXtoBaseY} from "./calculator.js";

const input = document.getElementById("input");
const inputs = document.getElementsByName("inputs");
const output = document.getElementById("output");
const outputs = document.getElementsByName("outputs");
let inputBase = document
  .querySelector("input[type=radio][name=inputs]:checked")
  .getAttribute("baseValue");
let outputBase = document
  .querySelector("input[type=radio][name=outputs]:checked")
  .getAttribute("baseValue");


function attachListeners(array, func) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    array[i].addEventListener("change",func);
  }
}

const calculate = function () {
  output.value = convertBaseXtoBaseY(input.value, inputBase, outputBase);
};

const inputBaseHandler = function (e) {
  inputBase = e.target.getAttribute("baseValue");
  calculate();
};
const outputBaseHandler = function (e) {
  outputBase = e.target.getAttribute("baseValue");
  calculate();
};

console.log(inputs);
attachListeners(inputs, inputBaseHandler);
attachListeners(outputs, outputBaseHandler);
input.addEventListener("input", calculate);

