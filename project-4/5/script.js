// findIndex ,every & some
var a = [23, 33, 45, 43, 12];
function find_index() {
  let find_ans = a.findIndex((value) => value % 2 !== 0);
  if (find_ans) {
    console.log("findindex : all number are even ");
  } else {
    console.log("findindex :all number are not even ");
  }

  let every_even = (value) => value % 2 == 0;
  const every_ans = a.every(every_even);
  if (every_ans) {
    console.log("every : all number are even");
  } else {
    console.log("every :  number are not even ");
  }

  let some_even = (value) => value % 2 == 0;
  const some_ans = a.some(some_even);
  if (some_ans) {
    console.log("some : number are even");
  } else {
    console.log("some :  number are not even ");
  }
}

find_index();
