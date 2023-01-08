// DESCRIPTION:
// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// My Solution
function consonantCount(str) {
  // I hate regex
  return str
    .toLowerCase()
    .split("")
    .filter(
      (item) =>
        ![
          "a",
          "e",
          "i",
          "o",
          "u",
          " ",
          "_",
          "*",
          "^",
          "$",
          "&",
          "#",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ].includes(item)
    ).length;
}
