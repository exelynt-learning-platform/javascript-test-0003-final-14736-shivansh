/**
 * Prints an alternating 0/1 triangle pattern
 * @param {number} rows - Number of rows for the triangle
 */

function printAlternatingBinaryTriangle(rows) {
  if (!Number.isInteger(rows) || rows < 1) {
    console.error("Invalid input: rows must be a positive integer.");
    return;
  }

  for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
      const value = (row + col) % 2 === 0 ? 1 : 0;
      line += value + " ";
    }

    console.log(line.trim());
  }
}

// Example usage
printAlternatingBinaryTriangle(6);
