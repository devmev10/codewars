// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"

// My Solution

function unscrambleEggs(str) {
  // Remove "egg" after each consonant
  const unscrambledStr = str.replace(/egg/g, "");
  return unscrambledStr;
}
