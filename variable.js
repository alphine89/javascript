//let, const and var
let username = "alphine"; //block scoped
const email = "alphine@gmail.com"; //block scoped
var age = 36; //less used//function scope

{
  let var1 = "variable 1";
  let var2 = "variable 2";
  let var3 = "variable 1";
  console.log(var1);
}
username = "albert";

console.log(username);
console.log(email);
console.log(age);

function funScopeTest() {
  //function scope
  let var4 = 4;
  const var5 = 5;
  var var6 = 6;
}
console.log(var6); //not defined outside outside the function scope

//variable naming rule
/**
 * cannot used a reserved key word
 * must begin with either a letter,underscore or $sign
 * A variable name cannot start with a digit
 * A variable name can only contain alpha-numeric characters and underscores (a-z, A-Z, 0-9, and _ )
 * Variable names are case-sensitive (age, Age and AGE are three different variables)
 * There is no limit on the length of the variable name
 * A variable name cannot contain spaces
 * The variable name cannot be any Go keyword
 *
 */
let Hello = "hello";
let hello;
console.log(Hello);
{
  console.log(Hello);
}
/*naming conventions for variables
kebab,-naming class in html
snake,-
camelcase,-naming variables
pascal-naming classes in oop*/