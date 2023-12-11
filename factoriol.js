function calculateFactorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers";
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  let userInput = prompt("Enter a number to print a factorial:");
  var number = (userInput);
  if (!isNaN(number) && number >= 0) {
      let result =calculateFactorial(number);
      console.log(`The factorial of ${number} is: ${result}`);
  } else {
      console.log("Please enter a positive number");
  }
  