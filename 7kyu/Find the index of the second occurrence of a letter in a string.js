// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1

// My Solution
function secondSymbol(s, symbol) {
  let fil = s.split("").filter((item) => item === symbol);
  if (fil === [] || fil.length < 2) {
    return -1;
  }

  let mapped = s
    .split("")
    .map((item, index) => (item !== symbol ? "" : index))
    .filter((item) => item !== "");
  return mapped[1];
}
