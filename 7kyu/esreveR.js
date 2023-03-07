// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// My Solution
reverse = function (array) {
  let arr = [];
  array.forEach((item) => arr.unshift(item));
  return arr;
};
