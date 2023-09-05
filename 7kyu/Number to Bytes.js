// In this kata, your task is to write a function to_bytes(n) (or toBytes(n) depending on language) that produces a list of bytes that represent a given non-negative integer n. Each byte in the list is represented by a string of '0' and '1' of length 8. The most significant byte is first in the list. The example test cases should provide you with all the details. You may assume that the argument n is valid.

// My Solution

function toBytes (n) {
    const b = n.toString(2),
          s = b.padStart(8*Math.ceil(b.length/8), '0')
    const bytes = []
    for (let i = 0; i < s.length; i += 8)
      bytes.push(s.slice(i,i+8))
    return bytes
  }