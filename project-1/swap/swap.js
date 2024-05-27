function swap() {
  let a = 10;
  let b = 20;
  let c;

  console.log("a =", a);
  console.log("b =", b);

  c = a;
  a = b;
  b = c;

  console.log("after swapping :");

  console.log("a =", a);
  console.log("b =", b);
}
swap();
