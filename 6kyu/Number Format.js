// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902'.

// My Solution
function numberFormat(n) {
  const str = Math.abs(n).toString();
  let result = "";

  for (let i = str.length - 1, count = 0; i >= 0; i--, count++) {
    if (count > 0 && count % 3 === 0) {
      result = "," + result;
    }
    result = str[i] + result;
  }

  if (n < 0) {
    result = "-" + result;
  }

  return result;
}
