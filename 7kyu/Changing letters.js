// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// My Solution
function swap (string) {
    return string.split('').map(item => ['a','e','i','o','u'].includes(item)? item.toUpperCase() : item).join('')
  }