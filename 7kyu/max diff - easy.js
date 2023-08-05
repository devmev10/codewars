// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

// My Solution

function maxDiff(lst) {
    if (lst.length <= 1) {
      return 0;
    }
  
    let smallest = lst[0];
    let largest = lst[0];
  
    for (let i = 1; i < lst.length; i++) {
      if (lst[i] < smallest) {
        smallest = lst[i];
      } else if (lst[i] > largest) {
        largest = lst[i];
      }
    }
  
    return largest - smallest;
  }
  