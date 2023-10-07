export {convertBaseXtoBaseY};

//Eg: hexidecimal -> digitlist.slice(0,15)
const digitList = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

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
  return decodedNum; //combine the array of string into one string
}
//takes base10 number & baseX number system -> array of baseX digits
function encode(num, digitList) {
  let encodedNum = [];
  for (let i = 0; i < num.length; i++) {
    encodedNum[i] = digitList[num[i]];
  }
  return encodedNum;
}
//converts base10 -> baseX
function convertToBase(number, destinationNumberSystem) {
  let destinationBase = destinationNumberSystem.length;
  let newNumber = [];
  let realNumber = Number(number.join(""));
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
  let decodedNum, result, encodedResult;
  let currentNumberSystem = digitList.slice(0,currentbase-1)
  let destinationNumberSystem = digitList.slice(0,destinationBase)

  decodedNum = decode(number, currentNumberSystem);
  if (currentbase == 10) {
    result = convertToBase(decodedNum, destinationNumberSystem);
  } else {
    let base10Num = convertToBase10(decodedNum, currentNumberSystem);
    result = convertToBase10(base10Num, destinationNumberSystem);
  }
  encodedResult = encode(result, destinationNumberSystem)
  return encodedResult.join("")
}

