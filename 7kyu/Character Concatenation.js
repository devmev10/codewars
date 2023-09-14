// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

// My Solution

function charConcat(s){
    let str = ''
    let i = 0
    let j = s.length - 1
    
    while(i < j) str += s[i++] + s[j--] + i
    
    return str
  }