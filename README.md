# Base Conversion
*Web application that converts between binary, hexadecimal, decimal, and any other base using base convert utility*

> The base conversion utility provides a set of functions that allow for seamless conversion between different number systems. The code is written in JavaScript and demonstrates proficiency in algorithmic thinking and manipulation of arrays. The utility can be easily integrated into other projects requiring base conversion functionality.

> Demonstration Page [https://joncgroberg.github.io/BaseConversion](https://joncgroberg.github.io/BaseConversion)

<p align="center">
<img src="screenshots/main.gif">
</p>

- Allows users to **convert** between different number bases
- **Animate** conversion icon while the conversion is being performed.
- **Toggle** between light and dark themes.


# Base Conversion Utility
This repository contains a base conversion utility implemented in JavaScript. The utility provides functions to convert numbers between different number systems, such as binary, hexadecimal, and decimal.
> **decode** the number -> **convert**  to base 10 -> **convert**  to the destination base -> **encode** the result

### Usage
To use the base conversion utility, simply import the convertBaseXtoBaseY function and call it with the appropriate parameters. The function will return the converted number as a string.

```javascript
import { convertBaseXtoBaseY } from 'base-conversion';
const result = convertBaseXtoBaseY('A1B', 16, 2);
console.log(result); // Outputs: '101000011011'
```

## Functionality
The utility includes the following functions:

### convertBaseXtoBaseY
This function takes a number, the current base of the number system, and the destination base of the desired number system. It converts a number from the current base to the destination base and returns the result as a string.
```javascript
function convertBaseXtoBaseY(number, currentbase, destinationBase) {
  let currentNumSystem = digitList.slice(0, currentbase);
  let destinationNumSystem = digitList.slice(0, destinationBase);

  let decodedNum = decodeNumber(number, currentNumSystem);
  let base10Num = convertToBase10(decodedNum, currentNumSystem);
  let result = convertToBase(base10Num, destinationNumSystem);
  let encodedResult = encodeNumber(result, destinationNumSystem);

  return encodedResult.join("");
}
```

### decodeNumber
This function decodes a number from a given number system to an array of digits representing the decoded number. It takes a number and the current number system as inputs and returns an array of decoded digits.

### convertToBase10
This function converts an array of base 10 numbers to a single base 10 number. It takes an array of numbers and the current number system as inputs and returns the converted base 10 number.

### convertToBase
This function converts a base 10 number to an array of digits representing the number in the destination number system. It takes a number and the destination number system as inputs and returns an array of digits.

### encodeNumber
This function encodes an array of digits representing a number in the destination number system. It takes an array of numbers and the destination number system as inputs and returns the encoded number.


## Tech

- Bootstrap
- CSS
- HTML
- Javscript
  
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[Mit](https://choosealicense.com/licenses/mit/)
