// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// My Solution
function roundToNext5(n) {
  if (n === 0) {
    return 0;
  }
  return n % 5 === 0 ? (n / 5) * 5 : (Math.floor(n / 5) + 1) * 5;
}
