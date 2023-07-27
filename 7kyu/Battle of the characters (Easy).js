// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//       * "ONE", "TWO"  -> "TWO"`
//       * "ONE", "NEO"  -> "Tie!"

// My Solution

function calculatePower(str) {
  // Function to calculate the power of a string
  const charCodeOffset = "A".charCodeAt(0) - 1;
  return str
    .split("")
    .reduce(
      (totalPower, char) => totalPower + char.charCodeAt(0) - charCodeOffset,
      0
    );
}

function battle(str1, str2) {
  const power1 = calculatePower(str1);
  const power2 = calculatePower(str2);

  if (power1 > power2) {
    return str1;
  } else if (power2 > power1) {
    return str2;
  } else {
    return "Tie!";
  }
}
