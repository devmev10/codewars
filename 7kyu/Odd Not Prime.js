// For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

// Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

// Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2

// My Solution
const isPrime = (num) => {
  for (let i = 2; i <= num ** 0.5; i++) {
    if (!(num % i)) return false;
  }
  return num > 1;
};

const oddNotPrime = (n) =>
  [...Array(++n >> 1)]
    .map((_, idx) => idx * 2 + 1)
    .reduce((pre, val) => +!isPrime(val) + pre, 0);
