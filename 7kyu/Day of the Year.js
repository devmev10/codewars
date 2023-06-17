// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

// My Solution
function toDayOfYear(date) {
  let day = date[0];
  let month = date[1];
  let year = date[2];

  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Check if it's a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29; // February has 29 days in a leap year
  }

  let dayOfYear = 0;

  // Sum up the days in the previous months
  for (let i = 0; i < month - 1; i++) {
    dayOfYear += daysInMonth[i];
  }

  // Add the current day
  dayOfYear += day;

  return dayOfYear;
}
