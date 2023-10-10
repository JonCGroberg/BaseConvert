import {convertBaseXtoBaseY } from "./calculator.js";

const source = document.getElementById('source');
const result = document.getElementById('resulty');

const inputHandler = function(e) {
  result.innerText = e.target.value;
}

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler); // for IE8
// Firefox/Edge18-/IE9+ don’t fire on <select><option>
// source.addEventListener('change', inputHandler); 

