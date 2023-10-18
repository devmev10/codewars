// You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000

// We need a way to tell which is red, and which is blue!

// That's where you create hex_color()!

// It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!

// But, if multiple colors are of equal concentration, you should return their mix!

// red + blue = magenta

// green + red = yellow

// blue + green = cyan

// red + blue + green = white
// One last thing, if the string given is empty, or has all 0's, return black!

// Examples:

// hexColor('087 255 054') == 'green'
// hexColor('181 181 170') == 'yellow'
// hexColor('000 000 000') == 'black'
// hexColor('001 001 001') == 'white'

// My Solution

function hexColor(rgb) {
  let colors = (rgb || "0 0 0").split(" ").map(Number);
  let max = Math.max(colors[0], colors[1], colors[2]);
  let hash = colors.map((c) => (c > 0 && c == max ? "1" : "0")).join("");

  return {
    "000": "black",
    111: "white",
    100: "red",
    110: "yellow",
    "010": "green",
    "011": "cyan",
    "001": "blue",
    101: "magenta",
  }[hash];
}
