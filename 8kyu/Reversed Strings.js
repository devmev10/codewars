// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//my solution
function solution(str){
    let letterArray = str.split('')
    let reversedArray = letterArray.reverse()
    return reversedArray.join('')
    }