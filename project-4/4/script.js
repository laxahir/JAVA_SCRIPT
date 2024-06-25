// double and tripple
var a = [23, 33, 45, 43, 12];
function double() {
  let doubled = [];
  let trippled = [];

  a.map((value) => {
    let doubleans = value * 2;
    doubled.push(doubleans);

    let trippleans = value * 3;
    trippled.push(trippleans);
  });
  return { doubled, trippled };
}
let result = double();
console.log(result);

// second method

let doublNumber = a.map((value) => value * 2);
console.log("Double Number : " + doublNumber);

let trippleNumber = a.map((value) => value * 3);
console.log("tripple Number : " + trippleNumber);
