/**
 * For this project, you will build a message generator program. 
 * Every time a user runs a program, they should get a new, randomized output. 
 * You’re welcome to take the project in a couple of different forms, 
 * like an astrology generator, inspirational message, or nonsensical jokes. 
 * To make your program truly random, the message that it outputs should be 
 * made up of at least three different pieces of data.
 */

 // First, let's set up the data - three arrays to hold three different parts of the message

 /** Random Number Generator
 * Takes one Param - range, to determine the maximum value returned
 * This will let us pass in array.length as the 'range' value
 * Allowing to to dynamically generate a value no larger than the size of the array
 * */

 const randomNumber = (range) => {
    return Math.floor(Math.random() * range);
  };

 const names = ['Steve','Lewis','Stan',''];

 const firstLine = [
    'There once was a man with a car, ',
    'There once was a man who lived far, ',
    'There once was a man named Jabbar, ',
    'There once was a man with a scar, ',
    'There once was a man with a car, ',
    'There once was a man with a crowbar, '];

const secondLine = [
    'who thought he was a chocolate bar. ',
    'who fell off a big fat cigar. ',
    'who tried to go near and far. ',
    'who lived in town called St. HarHar. '];

const thirdLine = ['So he went to the pub for a pint...'];

const generateLyric = (array1,array2,array3) => {
    // First, generate three random numbers so we can randomly pick an element from each array
    const randomOne = randomNumber(array1.length);
    const randomTwo = randomNumber(array2.length);
    const randomThree = randomNumber(array3.length);

    const partOne = array1[randomOne];
    const partTwo = array2[randomTwo];
    const partThree = array3[randomThree];

    // Put them all together, and return it
    return partOne + partTwo + partThree;
}

// ------------------- Test --------------------
//console.log(randomNumber(6));

console.log(generateLyric(firstLine,secondLine,thirdLine));
