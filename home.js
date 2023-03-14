let age = 55;
if (age < 20) {
  console.log("child");
} else if (age < 35) {
  console.log("youth");
} else if (age < 50) {
  console.log(adult);
} else if (age < 80) {
  console.log("old");
}

//switch
let town = "nairobi";
switch (town) {
  case "mombasa":
    console.log("mombasa");
    break;
  case "malindi":
    console.log("kilifi");
    break;
  default:
    console.log("eldamaravine");
}

let day = "monday";
switch (day) {
  case "monday":
    console.log("yes its monday");
    break;
  case "teusday":
    console.log("yes its teusday");
    break;
  case "wednesday":
    console.log("yes its wednesday");
    break;
  case "friday":
    console.log("yes its friday");
    break;
  default:
    console.log("yes its sunday or sartudar");
}
/*
//for loop
let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

let y;
for (y = 0; y < 8; y++) {
  console.log(y);
}
const fruits = ["banana", "orange", "apple", "citrus", "ova"];
for (x of fruits) {
  console.log(x);
}

//while loop
let z = 0;
while (z < 15) {
  console.log(z);
  z++;
}
//jumping iteration
let m;
for (m = 0; m < 20; m++) {
  if (m == 5) {
    break;
  }
  console.log(m);
}
*/

function evenNumbers(z, y) {
  let m = z + 1;
  for (m; m < y; m++) {
    if (m % 2 == 0) {
      console.log(m);
    }
  }
}
evenNumbers(31, 60);

let check_freq(x):
    freq = {}
    for c in set(x):
       freq[c] = x.count(c)
    return freq

check_freq("congratulation")
