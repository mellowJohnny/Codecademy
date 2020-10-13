// The Story - one big String
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let overusedWordCounter = 0; // Counter to keep track of how many times overused words appear in the story

let sentenceCounter = 0; // Counter to keep track of how many sentences are in the story

// ---------------------  Project work

// -------------------------- Task 1 --------------------------------------
// Create a new array with all the words as individual Array elements so we can analyse the parapgraph
const storyWords = story.split(" ");

// -------------------------- Task 2 --------------------------------------
// Let's count the number of words, and print to the console
// This could also be done in one line: console.log(storyWords.length);
// Prints in Task 6...
const wordCount = storyWords.length;


// -------------------------- Task 3 --------------------------------------
// Now let's filter out all the 'unnessary' words:
const betterWords = storyWords.filter(word => {
        // Check to see if the current element 'word' is included in the list of 'unnecessary' words.  
        // Will return 'true' if it is - since we do nothing if there is a match, 
        // the word will not get added into the new Array
        if (unnecessaryWords.includes(word)){  
        }
        // Current element is not in the array of unnecessary word - return it to the betterWords array
        else {
            return word;
        }
    });

// -------------------------- Task 4 --------------------------------------
// Tell the writer how many times the 'overused' words appear in the text
// Use storyWords array to check against the array of overused words
const overusedWordCount = storyWords.forEach(word => {
    if (overusedWords.includes(word)){ 
        // .includes() returned 'true' - we have detected an "overused" word, increment the counter
        overusedWordCounter++;
    }
    // .includes() returned 'false' - nothing to see here...
    else {
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
