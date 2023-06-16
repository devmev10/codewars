// A Jubilee Year is celebrated in Santiago de Compostela whenever July 25, the day of Santiago the Elder, falls on a Sunday.

// For example, as of 2018 we know the last Jubilee year was 2010 and the next is going to be 2021.

// Your task is to create the function isJubilee() that will tell us whether a given year was/is a Jubilee Year or not. For this kata, we're just interested in years from 1900 to 2099 (both included), so don't expect your function to receive any input out of that range.

// Example:

//   isJubilee(2020);  // <-- returns false  because 2020/07/25 is Saturday
//   isJubilee(2021);  // <-- returns true   because 2021/07/25 is Sunday
//   My Solution

function isJubilee(year) {
  // Check if the year is within the range of 1900 to 2099
  if (year >= 1900 && year <= 2099) {
    // Create a Date object for July 25 of the given year
    var jubileeDate = new Date(year, 6, 25); // Months are zero-based (0 is January, 6 is July)

    // Check if the day of the week for the jubileeDate is Sunday (0 is Sunday, 6 is Saturday)
    if (jubileeDate.getDay() === 0) {
      return true; // Jubilee Year
    }
  }

  return false; // Not a Jubilee Year
}
