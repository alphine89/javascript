//push,pop,shift,unshift,splice,slice,foreach
alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "z",
  "y",
  "x",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
];
vowels = ["a", "e", "i", "o", "u"];
numbers = ["1", "2", "3", "4"];
//removes the last vowel
//vowels.pop; //removes last element of the array
//vowels.push("d"); //add an element to the end of the array
//vowels.unshift("a", "a"); //adds element sn to the begining of the array
//vowels.shift(); //removes first element of the array
//console.log(alphabets.slice(2, 16)); //slices out elements from the array from index 2.
//vowels.splice(2, 3, "x", "v");
//console.log(vowels);
//console.log(vowels.join(""))
//alphabets.replace([vowels], "");
//console.log(alphabets);
//indexof console.log(vowels.indexof(e));//1

alphanum = vowels.concat(numbers);
console.log(alphanum);
//write a function to count number of occuerence of a character in a string
text = "congratulation";
text.count("n");
console.log

/*var stringsearch = "n"
       str = "congratulation";
    for(var count=-1,index=-2; index != -1; count++,index=str.indexOf(stringsearch,index+1) );
*/

function charcount(word,letter){
    if (word.indexof(letter)===-1){
        console.log("letter"+ letter+ "not found "+ word)
    }
    else{word.index(letter)}
}
charCounter("congratulations")

