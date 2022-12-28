// Find Mean
// Find the mean (average) of a list of numbers in an array

// My Solution
var findAverage = function (nums) {
    return nums.reduce((cur,sum) => cur + sum, 0) / nums.length
  }