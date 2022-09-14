// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

//My Solution
function vaporcode(string) {
    let arr = string.replace(/ /g, '').split('')
    let vaporwave = arr.map(item => item.toUpperCase()+"  ")
    return vaporwave.join('').trim()
  }