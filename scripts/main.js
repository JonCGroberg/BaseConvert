// base values for binary decimal and hexadecimal
const binaryDigits = ['0','1'];
const decimalDigits = ['0','1','2','3','4','5','6','7','8','9'];
const hexadecimalDigits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G'];

function calculate(number) {
    return number;
}

function validate(number) {
  return number;
}

class Number {
  constructor(base, base) {
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

let binaryNumber = "01"
let decimalNumber = "5"
let hexNumber= "FFFFFF"

console.log(convert(decimalNumber,10,2));

function convert(number, base, desinationBase) {
    let newNumber ="";
    let realNumber = Number(number);
    let remainder = realNumber%desinationBase;
    let startIndex = realNumber-(remainder);

    for (i=startIndex,i>=1; i/=desinationBase;){
        remainder = realNumber-i;
        digit = (realNumber-realNumber)
        for (j = i; j>=realNumber;j) {
            
        }
        newNumber.unShift()
    }

}