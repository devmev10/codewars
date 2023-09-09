// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

// Result should be separated by comma and space.

// Example
// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'

// My Solution
function geometricSequenceElements(a, r, n) {
  let mul = a;
  let arr = [a];
  for (let i = 1; i < n; i++) {
    mul = mul * r;
    arr.push(mul);
  }
  return arr.join(", ");
}
