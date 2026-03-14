# Alternating 0/1 Triangle Pattern in JavaScript

This project demonstrates how to generate an **Alternating Binary Triangle Pattern** using JavaScript.

The program prints a triangle where **0 and 1 alternate based on the position of the row and column**. It is a common **logic-building problem asked in coding assessments and interviews**.

---

## 📌 Problem Statement

Write a program that prints an **Alternating 0/1 Triangle Pattern** for a given number of rows.

Example when `rows = 6`:

```
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
0 1 0 1 0 1
```

---

## 🧠 Logic Used

1. The triangle contains **N rows**.
2. Each row prints numbers from **column 1 to the row number**.
3. The value of each position depends on the **sum of the row and column index**.

Rule:

* If `(row + column) % 2 === 0` → print **1**
* If `(row + column) % 2 !== 0` → print **0**

This approach removes the need to manually toggle values and makes the logic **simpler and more efficient**.

---

## 💻 Implementation

```javascript
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

// Example
printAlternatingBinaryTriangle(6);
```

---

## ⚙️ How to Run

1. Install **Node.js** on your system.
2. Save the code in a file called:

```
binaryTriangle.js
```

3. Run the program using:

```bash
node binaryTriangle.js
```

---

## 📂 Project Structure

```
alternating-binary-triangle
│
├── binaryTriangle.js
└── README.md
```

---

## 🚀 Features

* Clean and readable JavaScript implementation
* Input validation
* Reusable function
* Efficient mathematical logic
* Beginner-friendly explanation

---

## 📚 Concepts Covered

* JavaScript Loops
* Conditional Logic
* Pattern Printing
* Mathematical Pattern Optimization

---

## 👨‍💻 Author

**Shivansh Dubey**

B.Tech CSE

Technologies:
Java • JavaScript • React • MySQL
