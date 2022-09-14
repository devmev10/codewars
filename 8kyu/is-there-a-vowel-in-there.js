//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//My solution
function isVow(a){
  
    return  a.map(item => {
       if(item === 97){return 'a'}
       else if(item === 101){return 'e'}
       else if(item === 105){return 'i'}
       else if(item === 111){return 'o'}
       else if(item === 117){return 'u'}
       else{return item}
     })
     
    }