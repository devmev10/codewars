// DESCRIPTION:
// Complete the function which converts a binary number (given as a string) to a decimal number.

// My Solution
function binToDec(bin){
  return bin.split('').reverse().map((item,index) => (2**index) * parseInt(item)).reduce((sum,cur)=> cur+sum,0)
}

