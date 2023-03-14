/* ternary/conditional operators condition? truevalue: falsevalue*/
//sequence,selection & iteration flow controls
//sequence-default behavior  where code is executed top-down
//selecton-choosing to execute a block of code if a certain condition is true or false depending on a condition.(if switch)
//iteration/looping- repeating execution of a block of code for a predtermined number of times(for loop or a whileloop)

//selectio

//if statements
let age = 55;
if (age < 18) {
  console.log("a kid");
} else if (age < 30) {
  console.log("join the youth");
} else if (age < 45) {
  console.log("join the adult");
} else if (age < 70) {
  console.log("join the elderly");
}

//swith case
let day = "ay";
switch (day) {
  case "monday":
    console.log("it is monday");
    break;
  case "teusday":
    console.log("it is teusday");
    break;
  case "wednesday":
    console.log("it is wednesday");
    break;
  case "thursday":
    console.log("it is thursday");
    break;
  default:
    console.log("its either friday, sartuday, or sunday");
}

//ternary operator
age = 20;
age > 30 ? console.log("you are of age") : console.log("not of age");

//while loop
while (age < 30) {
  console.log("great!!" + age);
  age++;
}

let z = 0;
while (z < 15) {
  console.log(z);
  z++; //increment yhe value to break out of the loop
}
//for loop

let color = ["blue", "black", "red", "purple"];
console.log(color.length);

for (let index = 0; index < color.length; index++) {
  console.log(color[index] + " has " + color[index].length + " characters");
}


//object-protypes
//string and array methods
