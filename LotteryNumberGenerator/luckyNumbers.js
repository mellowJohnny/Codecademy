
// -------------------------------- Lucky Numbers! -------------------------------
// Set up the hardcoded lottery parameters:
const lotteryName = 'Lotto 6/49';  // Lottery Name
const howManyPicks = 6;  // The number of picks to generate
const lotterySize = 49;  // The pool size of the lottery

let randomNumber;  // A single random-ish 'Lucky Number'
let numSet = new Set();  // a Set to hold the Lucky Numbers
let setBuilderCalls = 1;  // Keep track of how many times the setBuilder() function is called

//const myLuckyNumbers = luckyNumbers(howManyPicks,lotterySize);
//console.log(myLuckyNumbers);

// Run the programme...
luckyNumbers(howManyPicks,lotterySize);

// Our Main Function call:
function luckyNumbers(picks,size){
    var i;
    i = picks;
    for (i = 0; i < picks; i++){
        randomNumber = Math.round(Math.random() * size);
        setBuilder(randomNumber, picks);
        // Counter to know how many times we've looped.
        setBuilderCalls += 1; 
    }
}

// Helper function to generate random-ish numbers
function setBuilder(number, picks){
    /*  Build a Set containing our random numbers  
        The numbers must be unique (hence the Set), and cannot be 0 */ 
        
    // If the number is not 0, add it to the Set.  If it is, add 1 instead 
    number != 0 ? numSet.add(number) : numSet.add(1); 

    /*  Check if the setBuilderCalls counter equals our howManyNumber - if so, Loop is finished
        If the loop is done, check the size of the Set 
        If it is the same as our total, we have no duplicates, and it's safe to print the numbers */
    if (setBuilderCalls == picks) {
        if(numSet.size == picks){
            print(numSet); // Set is full, no duplicates - let's print!
        }
        else{
            // Set.size != howManyNumbers: we have duplicates!
           // let numOfDupes = setBuilderCalls - numSet.size;
           // console.log(`Looks like we had ${numOfDupes} duplicates...running again...`);
           luckyNumbers(howManyPicks,lotterySize);
        }
    }    
} // end setBuilder

/*  Print & Sort Function:
    Takes the Set from setBuilder();, converts it to an Array, sorts it, and prints it */

function print(mySet){
    // Convert the Set to an Array, then sort the Array by increasing order
    let numArray = Array.from(mySet)  
    numArray.sort(function(a, b){return a-b});  
    // Print it
    console.log(`Your ${lotteryName} numbers are: `);  
    numArray.forEach(function(item, index, array) {
       console.log(item)
      })
}
