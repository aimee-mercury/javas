function printSymbolPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += '  '; // Add spaces
        }
        for (let k = 1; k <= i; k++) {
            str += '* '; // Add asterisks
        }
        console.log(str);
    }
}

const numberOfRows = 8; // Change this number to adjust the size of the pattern
printSymbolPattern(numberOfRows);
