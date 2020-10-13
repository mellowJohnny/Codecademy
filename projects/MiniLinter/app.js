// The Story - one big String
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// ---------------------  Project work ------------------------------------

// My variables
let overusedWordCounter = 0; // Counter to keep track of how many times overused words appear in the story
let sentenceCounter = 0; // Counter to keep track of how many sentences are in the story
let checkedWords = new Set(); // Use a Set to keep track of unique words - don't want to check words we've already counted
let wordCountMap = new Map(); // Use a map to hold the word (key) and number of times it appears (value)

// -------------------------- Task 1 --------------------------------------
// Create a new array with all the words as individual Array elements so we can analyse the parapgraph
const storyWords = story.split(" ");

// -------------------------- Task 2 --------------------------------------
// Let's count the number of words
// Prints in Task 6...
const wordCount = storyWords.length;

// -------------------------- Task 3 --------------------------------------
// Now let's filter out all the 'unnessary' words:
// Check to see if the current 'word' is included in the list of 'unnecessary' words.  
// If it's *not* included in the array of unnessaryWords, return it...
const betterWords = storyWords.filter(word => {
        if (!unnecessaryWords.includes(word)){ 
            return word;
         }
    });

// -------------------------- Task 4 --------------------------------------
// Tell the writer how many times the 'overused' words appear in the text
// Use storyWords array to check against the array of overused words
// If the current 'word' is included in the list of overusedWords, increment the counter
const overusedWordCount = storyWords.forEach(word => {
    if (overusedWords.includes(word)){ 
        overusedWordCounter++;
    }
});

// -------------------------- Task 5 --------------------------------------
// Count the number of sentences in the Story.  Sentences end with a . or !
// Loop over the array of all the Stry words, and check to see if the last char in the string is a . or a !
const sentenceCount = storyWords.forEach(word => {
    if (word.endsWith('.')){ 
        // Word ends with a period, increment the counter
        sentenceCounter++;
    }
    if (word.endsWith('!')){ 
        // Word ends with a exclamation point, increment the counter
        sentenceCounter++;
    }
    // Word does not end with any of the above, nothing to see here...
    else {
    }
    
});

// -------------------------- Task 6 --------------------------------------
// Log the statistic we have to the console, nicely formatted using \n to create line breaks
function logStats(){
    console.log(`The paragraph originally had ${wordCount} words in it.\nAfter filtering out all unnecessary words we now have ${betterWords.length} words.\nYou have ${overusedWordCounter} overused words and ${sentenceCounter} sentences in total.\n`);    

};

// --------------------------- Run It! ------------------------------------
// Print the stats first...
logStats();

// Then print the new Story
// Use the join() method on the array to join all the individual elements, with a space between each one
console.log(betterWords.join(" "));

// ---------------------------- Extra Work --------------------------------
/* Here are some ideas:
For the overused words, remove it every other time it appears.
Write a function that finds the word that appears the greatest number of times.
Replaced overused words with something else. */

// Determine which word appears the most in the story
// Take the storyWords array and compare it to itself 
// TODO - strip out punctuation...

for (i=0; i<storyWords.length; i++){
    let instanceCounter = 0;
    let firstWord = storyWords[i].toLowerCase(); // Deal with everything is lowercase...
    
     for (j=0; j<storyWords.length; j++){
        let secondWord = storyWords[j].toLowerCase();
        // Check to see if the word we are working with has already been checked
        if (checkedWords.has(firstWord)){
            // Ignore...word is already in the Set
            }
        else {
            if (firstWord === secondWord){
                instanceCounter++;
                }
        // Add the word to the map, using the count as the value
        wordCountMap.set(firstWord,instanceCounter);
        } 
     }
     // After comparing the first word in the story to each word in the story
     // add the word to the Set, so we don't analyse it again... 
     checkedWords.add(firstWord.toLowerCase());
}

// Print the Map...
wordCountMap.forEach((word,key) => {
    console.log(`The word '${key}' appears ${word} times`);
});
