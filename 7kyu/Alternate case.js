// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// My Solution
function alternateCase(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}
