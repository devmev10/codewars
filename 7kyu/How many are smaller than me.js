// DESCRIPTION:
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// My Solution
function smaller(nums) {
    return nums.map((item, index) =>{
      let count = 0
      for(let i = index; i<nums.length; i++){
        if(item > nums[i]){count = count + 1}
      }
      return count
    } )
  }