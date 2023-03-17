// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My Solution
function divCon(x) {
  const a = x
    .filter((item) => typeof item === "number")
    .reduce((cur, sum) => cur + sum, 0);
  const b = x
    .filter((item) => typeof item === "string")
    .map(Number)
    .reduce((cur, sum) => cur + sum, 0);
  return a - b;
}
