function calc() {
  let a = Number(prompt("Enter first number:"));
  let b = Number(prompt("Enter second number"));

  function add(a, b) {
    return a + b;
  }
  function div(a, b) {
    return a / b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mult(a, b) {
    return a * b;
  }

  let result;
  let user = prompt("Enter Your calc +,-,/,*");

  if (user === "+") {
    result = Number(add(a, b));
  } else if (user === "/") {
    result = Number(div(a, b));
  } else if (user === "-") {
    result = Number(sub(a, b));
  } else if (user === "*") {
    result = Number(mult(a, b));
  } else {
    alert("invalid input");
  }
  console.log(result);
  document.getElementById("calculation").innerHTML = "answer is :" + result;
}
