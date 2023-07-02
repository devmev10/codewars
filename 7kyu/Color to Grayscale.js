// Grayscale colors in RGB color model are colors that have the same values for Red, Green and Blue. For example, #606060 is a grayscale color, while #FF0055 is not.

// In order to correctly convert a color to grayscale, one has to use luminance Y for Red, Green and Blue components. One can calculate luminance Y through the formula introduced in the NTSC standard:

// Y = 0.299 * R + 0.587 * G + 0.114 * B
// This formula closely represents the average person's relative perception of the brightness of red, green, and blue light.

// Given a color in 6-digit hexidecimal notation #RRGGBB in upper case, convert it to grayscale #YYYYYY. The answer should be a string representing the color code in 6-digit hexidecimal notation in upper or lower case.

// Round the value of luminance Y to the closest integer.

// All inputs will be valid.

// My Solution
function rgbToGrayscale(color) {
  // Remove the '#' symbol and convert to uppercase
  color = color.replace("#", "").toUpperCase();

  // Extract the individual color components (RR, GG, BB)
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // Calculate the luminance Y
  const y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);

  // Convert the luminance Y to a 2-digit hexadecimal string
  const yHex = y.toString(16).padStart(2, "0");

  // Return the grayscale color in 6-digit hexadecimal notation
  return `#${yHex.repeat(3)}`;
}
