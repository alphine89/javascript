/*let alphabet = "qwertyuiopasdfghjklzxcvbnm";
const nonVowels = (vowels) => {
  newAlphabet = vowels.replace(/[aeiou]/gi, "");
  return newAlphabet;
};
console.log((nonVowels)alphabet);

*/
function sumElements(numArr) {
  let sum = 0;
  for (let index = 0; index < numArr.length; index++) {
    sum += numArr[index];
  }
  return sum;
}
console.log(sumElements[(4, 45, 78, 90)]);
//question 2

function uersName(name, age) {
  alert(userName);
}
userName();
*/
//question3
function addTwoNumber(x, y) {
  let operation = 0
  for(operation; operation<y.lenght operation++){
    if (operation = x + y){
      return (operation)
    }
  }
  console.log(operation);

addTwoNumber(10, 20);
/* Palindrome checker: Write a function that takes a string as an argument and returns a boolean indicating whether the string is a palindrome (a word or phrase that reads the same forwards and backwards). You can use string methods such as split(), reverse(), and join() to accomplish this task.
*/function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len ; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('racecar ');
// call the function
const value = checkPalindrome(string);

console.log(value);


/*- Reverse string: Write a function that takes a string as an argument and returns the string reversed. You can use string methods such as split(), reverse(), and join() to accomplish this task.*/
    function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');


// Longest word in a string: Write a function that takes a string as an argument and returns the longest word in the string. You can use string methods such as split(), sort(), and length to accomplish this task.
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");