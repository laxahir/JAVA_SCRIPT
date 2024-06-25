// even or odd
var a = [23, 33, 45, 43, 12];
function even_odd() {
  a.forEach((element) => {
    if (element % 2 == 0) {
      console.log(element + "even");
    } else {
      console.log(element + "odd");
    }
  });
}
even_odd();
