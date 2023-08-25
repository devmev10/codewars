// Write a function that returns an array with each element representing one bit of a 32 bit integer in such a way that if printed it would appear as the binary representation of the integer (Least Significant Bit on the right).

// e.g. 1 = 00000000000000000000000000000001

// Assign either a 1 or a 0 to the array element depending on whether the bit at the corresponding position is a 1 or 0.

// For example (input -> output):

// 1 -> [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// -1 -> [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// The function takes one argument (n) which is the integer to be converted to binary.

// My Solution
function intToBinaryArray(n) {
    if (n >= 0) {
      return n.toString(2).padStart(32, '0').split('').map(Number);
    } else {
      // Handle negative numbers using two's complement
      n = -n;
      const binary = (n ^ 0xFFFFFFFF).toString(2).slice(-32).split('').map(Number);
      return binary.map(bit => bit ^ 1);
    }
  }