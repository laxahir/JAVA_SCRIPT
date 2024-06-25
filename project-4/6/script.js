// count the value from array

let pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

function count_array(obj, curr) {
  if (obj[curr]) {
    obj[curr] = obj[curr] + 1;
  } else {
    obj[curr] = 1;
  }
  return obj;
}

let pet_ans = pets.reduce(count_array, {});
console.log(pet_ans);
