export {convertBaseXtoBaseY}
const digitList = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] //Eg: hexidecimal -> digitlist.slice(0,15)

//Decodes each digit by index: F = 15th digit = 15
function decode(num, currentNumSystem) {
  let decodedNum = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < currentNumSystem.length; j++) {
      if (num[i] == currentNumSystem[j]) {
        decodedNum[i] = j; 
        break;
      }
    }
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
  }// use < becuase 99 can still be written using 10's place but 100 cannot

  for (let i = largestIndex; i >= 1; i /= destinationBase) {
    let remainder = leftOver % i;
    let times = (leftOver - remainder) / i;
    newNumber.push(times);
    leftOver -= times * i;
    // console.log(times + " in the " + i + " place | remainder: " + leftOver);
  }
  return newNumber;
}
//takes base10 number & baseX number system -> array of baseX digits
function encode(num, digitList) {
  let encodedNum = [];
  for (let i = 0; i < num.length; i++) {
    encodedNum[i] = digitList[num[i]];
  }
  return encodedNum;
}
//decodes & converts baseX -> baseX & encodes
function convertBaseXtoBaseY(number, currentbase, destinationBase) {
  let decodedNum, base10Num, result, encodedResult;
  let currentNumSystem = digitList.slice(0,currentbase);
  let destinationNumSystem = digitList.slice(0,destinationBase);

  decodedNum = decode(number, currentNumSystem);
  base10Num = convertToBase10(decodedNum,currentNumSystem);
  result = convertToBase(base10Num, destinationNumSystem);
  encodedResult = encode(result, destinationNumSystem)
  console.log(decodedNum,base10Num,result,encodedResult);
  return encodedResult.join("")
}


// TESTING CASES
// (convertBaseXtoBaseY("4095",10,16));
// (convertBaseXtoBaseY("FFF",16,10));
// (convertBaseXtoBaseY("4095",10,10));
// (convertBaseXtoBaseY("111111111111",2,10));
// (convertBaseXtoBaseY("4095",10,2));
// (convertBaseXtoBaseY("FFF",16,2));
// (convertBaseXtoBaseY("111111111111",2,16));
