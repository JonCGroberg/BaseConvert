// base values for binary decimal and hexadecimal
const binary = 2;
const decimal = 10;
const hexadecimal = 15;

function calculate(number) {}

function validate(number) {
  return number;
}

class Number {
  constructor(number, base) {
    this.number = number;
    this.base = base;
  }

  toBase(newBase) {
    this.base = newBase;
  }

  toString() {
    return this.number + " | Base:" + this.base;
  }
}


let myNumber = new Number(10, 10);
myNumber.toBase(1);

console.log(myNumber.toString());
