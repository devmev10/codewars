// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// My solution
function sumNoDuplicates(numList) {
    return numList.filter((item, index, arr)=> arr.indexOf(item) === arr.lastIndexOf(item) ).reduce((cur,sum) => cur + sum, 0)
  }