# javascript-test-0003-final-14736-shivansh
Final Project Assignment - This repository contains the complete final project code and documentation.


# Alternating 0/1 Triangle Pattern (JavaScript)

## Overview

This JavaScript program prints a **triangular pattern of alternating 0s and 1s**.
Each row begins with a number determined by whether the row number is **odd or even**, and the values alternate between **0 and 1** across the row.

This program demonstrates the use of **nested loops, conditional logic, and pattern generation** in JavaScript.

Example output for `rows = 6`:

```id="q7l9ux"
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
0 1 0 1 0 1
```

---

## How the Program Works

### 1. Function Definition

The function `printAlternatingPattern()` prints the pattern.
The parameter `rows` controls how many rows will be displayed.

```javascript id="t7l0nh"
function printAlternatingPattern(rows = 6)
```

If no value is passed, it prints **6 rows by default**.

---

### 2. Outer Loop (Rows)

```javascript id="kp3ydm"
for (let i = 1; i <= rows; i++)
```

This loop controls the **number of rows** in the pattern.

---

### 3. Determine Starting Number

```javascript id="4ymt0n"
let start = (i % 2 === 1) ? 1 : 0;
```

* If the row number is **odd**, the row starts with **1**
* If the row number is **even**, the row starts with **0**

---

### 4. Inner Loop (Numbers in Row)

```javascript id="kg0r7q"
for (let j = 0; j < i; j++)
```

This loop builds the numbers for the current row.

---

### 5. Alternating Logic

```javascript id="f1n5h9"
line += (start + j) % 2;
```

This expression flips the number between **0 and 1**.

Example:

| Start | j | Output |
| ----- | - | ------ |
| 1     | 0 | 1      |
| 1     | 1 | 0      |
| 1     | 2 | 1      |

---

### 6. Space Between Numbers

```javascript id="vsc6xq"
if (j < i - 1) line += ' ';
```

Adds a space between numbers but avoids a trailing space at the end.

---

### 7. Print the Row

```javascript id="p6u9er"
console.log(line);
```

Outputs the completed row.

---

## Code

```javascript id="c0jzfr"
// Program to print the alternating 0/1 triangular pattern
function printAlternatingPattern(rows = 6) {
    for (let i = 1; i <= rows; i++) {
        // Determine the starting number: 1 for odd rows, 0 for even rows
        let start = (i % 2 === 1) ? 1 : 0;
        let line = '';
        
        // Build the row by alternating the value
        for (let j = 0; j < i; j++) {
            // Append current value (alternates based on j)
            line += (start + j) % 2;
            if (j < i - 1) line += ' ';
        }
        
        console.log(line);
    }
}

// Execute the function
printAlternatingPattern();
```

---

## How to Run the Program

1. Install **Node.js**
2. Save the file as `alternatingPattern.js`
3. Open the terminal in the project folder
4. Run the command:

```id="3u0e6m"
node alternatingPattern.js
```

---

## Concepts Used

* Nested loops
* Conditional statements
* Pattern printing logic
* JavaScript functions
* Console output

---

## Author

This program was created as a **practice exercise for understanding loops and pattern generation in JavaScript**.
