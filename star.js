function printStarPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = 1; j <= rows - i; j++) {
        row += ' ';
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  // To print a star pyramid with 5 rows
  printStarPyramid(5);
  
  // number e question in assignment