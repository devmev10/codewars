// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
// My Solution
function leastLarger(a, i) {
  let sorted = [...a].sort((a, b) => a - b);
  let index = sorted.indexOf(a[i]) + 1;
  let element = sorted[index];

  while (element === a[i]) {
    index++;
    element = sorted[index];
  }

  if (element === undefined) return -1;

  return a.indexOf(element);
}
