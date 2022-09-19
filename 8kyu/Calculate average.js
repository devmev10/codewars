// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My solution
function findAverage(array) {
    if(array.length === 0){return 0}
    else{
      let b= array.reduce( (acc, cur) => (acc + cur), 0 )
      return b/array.length
      }
  }