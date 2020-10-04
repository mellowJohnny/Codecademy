// Set Up Some Global Variables
let input = "turpentine and turtles" // Start with this sentence...
let allLetters = []; // Array to hold each letter from the sentence
const vowels = []; // Array to hold just the vowels
let whaleTalkArray = []; // Our whale talk array

// First, split the String into individual tokens, and make 'em all uppercase
allLetters = input.toUpperCase(input.split("")); 

// Next, loop over the allLetters array and populate the vowels Array 
for(let i = 0; i < allLetters.length; i++){
    // Skip all y vowels - whales don't speak y's :-)
    if (allLetters[i] != 'Y'){ 
        // Pick out all the vowels
        if (allLetters[i] === 'A' || allLetters[i] === 'E' || allLetters[i] === 'I' || allLetters[i] === 'O' || allLetters[i] === 'U'){
            vowels.push(allLetters[i]); // Push the vowel
            // If it's an 'e' or a 'u', add it again.  Whales extend 'e' and 'u' sounds :-)
            if (allLetters[i] === 'E' || allLetters[i] === 'U'){ 
                vowels.push(allLetters[i]); 
            }
        }
    }
}

// Lastly, squish it all back together...in the Whale Talk Array
// Use the Array join() method with empty string as a parameter to remove the commas
whaleTalk = vowels.join('');

// Print the Whale Talk!
console.log(`Original sentence: ${input}`);
console.log(`Whale Talk!: ${whaleTalk}`);

