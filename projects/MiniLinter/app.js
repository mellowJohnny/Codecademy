let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// ---------------------  Project work

// First, create a new array with all the words as individual Array elements so we can analyse the parapgraph
const storyWords = story.split(" ");

// Next, let's count the number of words, and print to the console
// This could also be done in one line: console.log(storyWords.length);
const wordCount = storyWords.length;
console.log(`The paragraph has ${wordCount} words in it.`);

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

// Let's see if we filtered any words out...if we did the two numbers s/b different
console.log(`Filter has run.  We now have ${betterWords.length} words`);

// Print the new Array
console.log(betterWords.forEach(word => {console.log(word);}));

// Next, tell the writer how many times the 'overused' words appear in the text
// Use storyWords array to check against the array of overused words

