// DESCRIPTION:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// My Solution
function noBoringZeros(n) {
  if(n === 0){return 0}
  let arr = JSON.stringify(n).split('')
  for(let i=0; i<=arr.length; i++){
    if(arr[arr.length - 1] === '0') {arr.splice(-1)}
    else{break}
  }
  return JSON.parse(arr.join(''))
}
noBoringZeros(1050)
