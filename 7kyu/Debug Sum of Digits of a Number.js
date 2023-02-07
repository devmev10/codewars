// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

// My Solution
function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  Math.floor(integer).toString();
    for(var i = 0; i < digits.length; i++) {
      sum = Number(sum) + Number(digits[i]);
    }
    return sum;
  }