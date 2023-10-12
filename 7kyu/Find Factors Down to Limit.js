// In this Kata you have to find the factors of integer down to the limit including the limiting number. There will be no negative numbers. Return the result as an array of numbers in ascending order.

// If the limit is more than the integer, return an empty list

// My Solution

const factors = (integer, limit) => {
  const result = [];
  for (let i = limit; i <= integer; i++) integer % i || result.push(i);

  return result;
};
