// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

// My Solution
function keysAndValues(obj) {
  // Get all the keys of the object
  const keys = Object.keys(obj);

  // Get the corresponding values using the keys
  const values = keys.map((key) => obj[key]);

  // Return the keys and values as separate arrays
  return [keys, values];
}
