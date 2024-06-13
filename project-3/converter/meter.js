//  meter to foot

function meter() {
  let m = prompt("Enter meter");

  function met(m) {
    if (m >= 0) {
      let ft = m * 3.2808;
      console.log(ft);
      return ft;
    } else {
      alert("Number must be positive");
    }
  }
  document.getElementById("foot").innerText = "meter to foot is :" + met(m);
}
//  Celsius to Fahrenheit

function Celsius() {
  let celsius = prompt("Enter Celsius");

  function Cels(celsius) {
    if (celsius >= 0) {
      let fahrenheit = (celsius * 9) / 5 + 32;
      console.log(fahrenheit);
      return fahrenheit;
    } else {
      alert("Number must be positive");
    }
  }
  document.getElementById("Fahrenheit").innerText =
    "Celsius to Fahrenheit is :" + Cels(celsius);
}

// Dollar to Rupees

function Dollar() {
  let d = prompt("Enter Dollar");

  function Dol(d) {
    if (d >= 0) {
      let rupees = d * 83.5822;
      console.log(rupees);
      return rupees;
    } else {
      alert("Number must be positive");
    }
  }
  document.getElementById("Rupees").innerText =
    " Dollar to Rupees is :" + Dol(d);
}
