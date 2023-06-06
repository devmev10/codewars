// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]
// My Solution
function solve(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr.indexOf(element) === i) {
      result.push(element);
    } else {
      result.splice(result.indexOf(element), 1);
      result.push(element);
    }
  }

  return result;
}
