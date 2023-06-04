// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

// My Solution
function mergeStrings(str1, str2) {
  let overlap = "";

  for (let i = 0; i < str1.length; i++) {
    if (str2.startsWith(str1.slice(i))) {
      overlap = str1.slice(i);
      break;
    }
  }

  return str1 + str2.slice(overlap.length);
}
