
// Define an empty Object to define our module
// We will add / define properties next
const MessageMixer = {};

// Define the properties of MessageMixer by adding properties to the Object 
// and setting them equal to the functions we had defined:

MessageMixer.countCharacter = function countCharacter (inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

MessageMixer.capitalizeFirstCharacterOfWords = function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};


MessageMixer.reverseWord = function reverseWord(word) {
  return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords = function reverseAllWords(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
   return words.join(" ");
};


MessageMixer.replaceFirstOccurence = function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


MessageMixer.replaceAllOccurrences = function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

MessageMixer.encode = function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

// -------------      My new functions...

MessageMixer.palindrome = function palindrome(str){
    const theString = MessageMixer.reverseWord(str);
    return `${str} spelled backwards is ${theString}`
};

MessageMixer.piglatin = function(sentence,letter){
    const splitString = sentence.split(" ");
    return splitString.join(letter);
};

// Using Node.js syntax, export the MessageMixer module
module.exports = MessageMixer;


