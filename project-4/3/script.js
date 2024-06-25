// find number
var a = [23, 33, 45, 43, 12];
function find() {
  let Fnumber = a.find((value) => {
    return value === 45;
  });
  console.log(Fnumber);
}
find();
