// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

// My Solution
function explode(str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      const digit = parseInt(str[i], 10);
      result += digit.toString().repeat(digit);
    }
  
    return result;
  }
  