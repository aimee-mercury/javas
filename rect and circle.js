// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  const circleRadius = 5;
  const circleArea = calculateCircleArea(circleRadius);
  console.log(`The area of the circle with radius ${circleRadius} is: ${circleArea.toFixed(2)}`);


  // Function to calculate the area of a rectangle
  function calculateRectangleArea(length, width) {
    return length * width;
  }
  const rectangleLength = 6;
  const rectangleWidth = 8;
  const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
  console.log(`The area of the rectangle with length ${rectangleLength} and width ${rectangleWidth} is: ${rectangleArea}`);
  