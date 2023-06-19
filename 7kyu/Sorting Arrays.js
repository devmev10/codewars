// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter so there will only be a single match for each element.

// My Solution
function sortArray(a1, a2) {
  const map = {};

  // Create a map of the letters in a1 and their corresponding index
  for (let i = 0; i < a1.length; i++) {
    const letter = a1[i][0];
    map[letter] = i;
  }

  // Sort a2 based on the index of the corresponding letter in a1
  a2.sort((a, b) => {
    const letterA = a[0];
    const letterB = b[0];
    return map[letterA] - map[letterB];
  });

  return a2;
}
