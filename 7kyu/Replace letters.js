// In input string word(1 word):

// replace the vowel with the nearest left consonant.
// replace the consonant with the nearest right vowel.
// P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

// For example:

// 'codewars' => 'enedazuu'
// 'cat' => 'ezu'
// 'abcdtuvwxyz' => 'zeeeutaaaaa'
// It is preloaded:

// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
// const vowels = ['a','e','i','o','u'];
// P.S. You work with lowercase letters only.

// My Solution

function replaceLetters(word) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const vowels = ["a", "e", "i", "o", "u"];

  let result = "";

  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];
    const currentIndex = alphabet.indexOf(currentChar);

    if (vowels.includes(currentChar)) {
      // Find the nearest left consonant
      let j = 1;
      while (!consonants.includes(alphabet[(currentIndex - j + 26) % 26])) {
        j++;
      }
      result += alphabet[(currentIndex - j + 26) % 26];
    } else {
      // Find the nearest right vowel
      let j = 1;
      while (!vowels.includes(alphabet[(currentIndex + j) % 26])) {
        j++;
      }
      result += alphabet[(currentIndex + j) % 26];
    }
  }

  return result;
}
