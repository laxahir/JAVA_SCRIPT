let salery = prompt("Enter your salery:");
let tax = 200;

let hra = salery * (5 / 100);
let ta = salery * (8 / 100);
let ma = salery * (7 / 100);

let Allowance = hra + ta + ma;

let fs = Allowance + Number(salery) - tax;

console.log("final salery is:", fs);
console.log("house rent allo:", hra);
console.log("traveling allow:", ta);
console.log("medicale allow:", ma);
console.log("allownces is:", Allowance);
