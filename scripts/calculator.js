export { convertBaseXtoBaseY };
const digitList = "0123456789abcdefghijklmnopqrstuvwxyz"
  .toUpperCase()
  .split("");
//Eg: hexidecimal -> digitlist.slice(0,15)

//Decodes each digit by index: F = 15th digit = 15
function decodeNumber(num, currentNumSystem) {
  num = num.toUpperCase();
  let decodedNum = [];

  for (let i = 0; i < num.length; i++) {
    let digit = currentNumSystem.indexOf(num[i]);
    decodedNum.push(digit);
  }

  return decodedNum;
}

//Converts array of base10 numbers -> single base10 number
function convertToBase10(number, currentNumSystem) {
  let destinationBase = currentNumSystem.length;
  let newNumber = 0;
  let index = destinationBase ** (number.length - 1);

  for (let i = 0; i < number.length; i++) {
    newNumber += number[i] * index;
    index /= destinationBase; // eg 64 -> 32 -> 8 -> 4 -> 2 -> 1
  }

  return newNumber;
}

//converts base10 number -> array of digits representing base X
function convertToBase(number, destinationNumSystem) {
  let destinationBase = destinationNumSystem.length;
  let newNumber = [];
  let leftOver = number;
  let largestIndex = 1;

  for (let i = 1; i < number; i *= destinationBase) {
    largestIndex = i;
  } 

  for (let i = largestIndex; i >= 1; i /= destinationBase) {
    let remainder = leftOver % i;
    let times = (leftOver - remainder) / i;
    newNumber.push(times);
    leftOver -= times * i;

  }
  return newNumber;
}

//takes base10 number & baseX number system -> array of baseX digits
function encodeNumber(num, digitList) {
  let encodedNum = [];

  for (let i = 0; i < num.length; i++) {
    encodedNum[i] = digitList[num[i]];
  }

  return encodedNum;
}

//decodes & converts baseX -> baseX & encodes
function convertBaseXtoBaseY(number, currentbase, destinationBase) {
  let currentNumSystem = digitList.slice(0, currentbase);
  let destinationNumSystem = digitList.slice(0, destinationBase);

  let decodedNum = decodeNumber(number, currentNumSystem);
  let base10Num = convertToBase10(decodedNum, currentNumSystem);
  let result = convertToBase(base10Num, destinationNumSystem);
  let encodedResult = encodeNumber(result, destinationNumSystem);

  return encodedResult.join("");
}
