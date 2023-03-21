// Write a class Block that creates a block (Duh..)

// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`

// My Solution
class Block {
  constructor([w, l, h]) {
    this.width = w;
    this.length = l;
    this.height = h;
  }

  getLength() {
    return this.length;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.width * this.length * this.height;
  }
  getSurfaceArea() {
    return (
      2 *
      (this.width * this.length +
        this.height * this.length +
        this.width * this.height)
    );
  }
}
