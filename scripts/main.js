// Common number systems
const binaryDigits = ["0", "1"];
const decimalDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const hexadecimalDigits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

//takes baseX number & respective baseX number system -> returns array of base10 values for each digit
function decode(num, digitList) {
  let decodedNum = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < digitList.length; j++) {
      if (num[i] == digitList[j]) {
        decodedNum[i] = j; //return base10 value (F -> 15 where F is the 15th digit)
        break;
      }
    }
  }
  return decodedNum.join(""); //combine the array of string into one string
}
//takes base10 number & baseX number system -> array of baseX digits
function encode(num, digitList) {
  let encodedNum = [];
  for (let i = 0; i < num.length; i++) {
    encodedNum[i] = digitList[num[i]];
  }
  return encodedNum.join("");
}
//converts base10 -> baseX
function convertToBase(number, destinationNumberSystem) {
  let destinationBase = destinationNumberSystem.length;
  let newNumber = [];
  let realNumber = Number(number);
  let leftOver = realNumber;
  let largestIndex = 1;

  // console.log("Index's");
  for (let i = 1; i < realNumber; i *= destinationBase) {
    // console.log(i);
    largestIndex = i;
  }

  for (let i = largestIndex; i >= 1; i /= destinationBase) {
    let remainder = leftOver % i;
    let times = (leftOver - remainder) / i;
    newNumber.push(times);
    leftOver -= times * i;
    // console.log(times + " in the " + i + " place | remainder: " + leftOver);
  }
  return newNumber.join("");
}
//converts baseX -> base10
function convertToBase10(number, currentNumberSystem) {
  let destinationBase = currentNumberSystem.length;
  let newNumber = 0;
  let index = destinationBase ** (number.length - 1);

  for (let i = 0; i < number.length; i++) {
    newNumber += number[i] * index;
    index /= destinationBase;
  }
  return newNumber;
}

//decodes & converts baseX -> baseX & encodes
function convertBaseXtoBaseY(number, currentbase, destinationBase) {
  let base10Num, numberSystem, decodedNum, result, encodedResult;

  switch (currentbase) {
    case 2:
      numberSystem = binaryDigits;
      break;
    case 10:
      numberSystem = decimalDigits;
      break;
    case 16:
      numberSystem = hexadecimalDigits;
      break;
    default:
      break;
  }
  decodedNum = decode(number, numberSystem);

  if ((currentbase == decimalDigits)) {
    result = convertToBase(decodedNum, destinationBase);
  } else {
    base10Num = convertToBase10(decodedNum, numberSystem);
    result = convertToBase10(base10Num, destinationBase);
  }
  encodedResult = encode(result, destinationBase)
  return encodedResult;
}

console.log("1365");
console.log(decode("1365", decimalDigits));
console.log(convertToBase("1365", binaryDigits));
console.log(encode("10101010101", binaryDigits));

console.log(decode("555", hexadecimalDigits));
console.log(convertToBase10("555",hexadecimalDigits));
console.log(encode(["2","2","11"], hexadecimalDigits));