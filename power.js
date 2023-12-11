function calculateExponent(base, exponent) {
    return base ** exponent;
  }
  
  const baseNumber = 2;
  const userExponent = 5;
  const result = calculateExponent(baseNumber, userExponent);
  console.log(`${baseNumber} raised to the power of ${userExponent} is: ${result}`);
  