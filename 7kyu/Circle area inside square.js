// You get the blue+red area and need to calculate the red area.

// Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.

// You don't have to worry about error handling or negative number input: area >= 0.

// This kata might be simpler than you expect, but good luck!

// My Solution

function squareAreaToCircle(squareArea) {
    // Calculate the radius of the circle (half the side of the square)
    const radius = Math.sqrt(squareArea) / 2;
    
    // Calculate the area of the circle using the formula A = π * r^2
    const circleArea = Math.PI * Math.pow(radius, 2);
  
    return circleArea;
  }
  