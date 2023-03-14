/** 1primitive types
 * number
 * string
 * boolean
 * undefined
 * *2 complex type
 *
 * object
 * arrays
 * function
 * * */
//static typed languages(must indicat the type when declaring)& dynamically typed:-are assigned at runtime
let age = 50; //
let name = "alphine"; //string
let isloggedin = true;
let isloggedout = false; //boolean has only two states
//console.log(typeof age);//checkin the type a variable

//object data type
let person = {
  age: 39,
  height: 6,
  iskenya: true,
  run: function () {
    console.log("...running...");
  },
};
person.age = 26;
console.log(person.age); //dot notation
console.log(person["born in"]); //using bracket notatio  to access values in an object
let num = 79;
//passing by value and by reference

//Array-is an ordered list of values closed in square bracket.
let numbers = [1, 2, 3, "4", "5"];
const data = [{ age: 20, iskenyan: true }, ["blue", "red"], 43, true, "false"];
console.log(numbers[numbers.length - 2]);
console.log([data[1][1]]); //accessing yellow
//
console.log(data[0].iskenyan);


