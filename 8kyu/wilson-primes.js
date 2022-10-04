// DESCRIPTION:
// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

// My Solution
function amIWilson(P) {
    return P === 5 || P === 13 || P === 563 ? true : false
   }
   
  