// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// My Solution

function validParentheses(string) {
    const stack = [];
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return false; // Unbalanced parentheses
        }
        stack.pop();
      }
    }
  
    return stack.length === 0; // True if all parentheses are balanced, False otherwise
  }
  