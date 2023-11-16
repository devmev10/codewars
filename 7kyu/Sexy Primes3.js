// Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function which returns true if x & y are sexy, false otherwise.

// Examples
// 5, 11   -->  true
// 61, 67  -->  true
// 7, 13   -->  true
// 5, 7    -->  false
// 1, 7    -->  false  (1 is not a prime)
// Note: x & y are always positive integers, but they are not always in order of precendence... For example you can be given either (5, 11) or (11, 5) - both are valid.

// My Solution

function sexy_prime(x, y) {
  return Math.abs(x - y) === 6 && isPrime(x) && isPrime(y);
}

function isPrime(x) {
  let start = 2;
  while (start <= Math.sqrt(x)) {
    if (x % start++ < 1) return false;
  }
  return x > 1;
}
