//length of the sentence character
let str = new String( "I'm enrolled at Gomycode." );
let res = ("str.length is: " + str.length);
console.log(res)





// counting the words in a sentence
function WordCount(str) { 
return str.split(" ").length;
}

console.log(WordCount("It's never comforting to know that your fate depends on something as unpredictable as the popping of corn."));





//counting number of vowels in a sentence
function getVowels(str) {
var vowelsCount = 0;

//turn the input into a string
var string = str.toString();

//loop through the string
for (var i = 0; i <= string.length - 1; i++) {

//if a vowel, add to vowel count
if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
vowelsCount += 1;
}
}
return vowelsCount;
}
console.log(getVowels("Don't stop till you get it."))