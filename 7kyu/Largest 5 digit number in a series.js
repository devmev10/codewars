// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

// My Solution
function solution(number) {
  let greatestSequence = 0;

  for (let i = 0; i <= number.length - 5; i++) {
    const sequence = parseInt(number.slice(i, i + 5));

    if (sequence > greatestSequence) {
      greatestSequence = sequence;
    }
  }

  return greatestSequence;
}
