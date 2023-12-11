function generatePascalsTriangle(rows) {
    let pascalTriangle = [];
    
    for (let i = 0; i < rows; i++) {
      pascalTriangle[i] = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          pascalTriangle[i][j] = 1;
        } else {
          pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
        }
      }
    }
    
    return pascalTriangle;
  }
  
  function printPascalsPyramid(rows) {
    const pascalTriangle = generatePascalsTriangle(rows);
    const maxWidth = rows * 2 - 1;
    
    for (let i = 0; i < rows; i++) {
      let rowString = '';
      for (let j = 0; j < pascalTriangle[i].length; j++) {
        rowString += pascalTriangle[i][j] + ' ';
      }
      
      const padding = ' '.repeat((maxWidth - rowString.length) / 2);
      console.log(padding + rowString + padding);
    }
  }
  
  // To print Pascal's Pyramid with 7 rows
  printPascalsPyramid(7);
  