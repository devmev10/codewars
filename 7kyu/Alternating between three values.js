// Alternating Among Three Values
// Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

// What is the most efficient way to cycle among three values? Write a function f so that it satisfies

//   f(a) = b
//   f(b) = c
//   f(c) = a
// EXAMPLE
//   f( 3, { a:3, b:4, c:5 } ) => 4

//   My Solution

function f(x, values) {
  // Find the index of the current value in the values array
  const currentIndex = Object.values(values).indexOf(x);

  // Calculate the next index by adding 1 and wrapping around to 0 if necessary
  const nextIndex = (currentIndex + 1) % Object.values(values).length;

  // Return the value at the next index
  return Object.values(values)[nextIndex];
}
