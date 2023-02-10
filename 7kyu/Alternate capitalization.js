// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// My Solution
function capitalize(s){
    let arr =[]
    arr[1] = s.split('').map((item,index)=> index%2 === 0? item : item.toUpperCase()).join('')
    arr[0] = s.split('').map((item,index)=> index%2 === 0? item.toUpperCase() : item).join('')
    return arr
  };