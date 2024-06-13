// Function to calculate the area of a rectangle

function rectangle() {
  let length = prompt("Enter rectangle length");
  let width = prompt("Enter rectangle width");

  function areaOfRectangle(length, width) {
    if (length <= 0 && width <= 0) {
      return "Length and width must be positive numbers.";
    }
    return length * width;
  }
  console.log("Area of Rectangle:", areaOfRectangle(length, width));
  document.getElementById("rectangleans").innerText =
    "answer is :" + areaOfRectangle(length, width);
}

// Function to calculate the area of a triangle

function triangle() {
  let base = prompt("Enter triangle base");
  let height = prompt("Enter triangle height");

  function areaOfTriangle(base, height) {
    if (base <= 0 && height <= 0) {
      return "Base and height must be positive numbers.";
    }
    return 0.5 * base * height;
  }
  console.log("Area of Rectangle:", areaOfTriangle(base, height));
  document.getElementById("triangleans").innerText =
    "answer is :" + areaOfTriangle(base, height);
}

// // Function to calculate the area of a circle

function circle() {
  let radius = prompt("Enter circle radius");

  function areaOfCircle(radius) {
    if (radius <= 0) {
      return "Radius must be a positive number.";
    }
    return Math.PI * radius * radius;
  }
  console.log("Area of Circle:", areaOfCircle(radius));
  document.getElementById("circleans").innerText =
    "answer is :" + areaOfCircle(radius);
}

// // Example usage:
// console.log("Area of Rectangle (5, 10):", areaOfRectangle(5, 10)); // Output: 50
// console.log("Area of Triangle (4, 6):", areaOfTriangle(4, 6)); // Output: 12
// console.log("Area of Circle (3):", areaOfCircle(3)); // Output: 28.274333882308138
