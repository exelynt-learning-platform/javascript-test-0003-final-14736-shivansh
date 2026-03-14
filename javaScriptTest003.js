// Alternating 0/1 Triangle Pattern

let rows = 6;

for (let i = 1; i <= rows; i++) {

  let num;

  // odd row starts with 1, even row starts with 0
  if (i % 2 === 1) {
    num = 1;
  } else {
    num = 0;
  }

  let row = "";

  for (let j = 1; j <= i; j++) {
    row += num + " ";

    // switch between 0 and 1
    num = num === 1 ? 0 : 1;
  }

  console.log(row);
}