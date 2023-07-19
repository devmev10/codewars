// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d
// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

// My Solution

function transposeTwoStrings(arr) {
    const [str1, str2] = arr;
    const maxLength = Math.max(str1.length, str2.length);
    
    // Pad the shorter string with spaces
    const paddedStr1 = str1.padEnd(maxLength, ' ');
    const paddedStr2 = str2.padEnd(maxLength, ' ');
    
    // Transpose the strings
    const transposedStrings = [];
    for (let i = 0; i < maxLength; i++) {
      const row = `${paddedStr1[i]} ${paddedStr2[i]}`;
      transposedStrings.push(row);
    }
    
    return transposedStrings.join('\n');
  }
  
  // Test
  const result = transposeTwoStrings(['Hello', 'World']);
  console.log(result);
  