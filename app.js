
// -------------------------------- Lucky Numbers! -------------------------------

const howManyNumbers = 7;  // The number of Lucky Numbers to generate
const howManyPicks = 49;  // The "size" of the lottery pool
let randomNumber;  // A single random-ish 'Lucky Number'
let numSet = new Set();  // a Set to hold the Lucky Numbers
let setBuilderCalls = 1;  // Keep track of how many times the setBuilder() function is called

// Run the programme...
luckyNumbers(howManyNumbers);

// Our Main Function call:
function luckyNumbers(howManyNumbers){
    var i;
    i = howManyNumbers;
    for (i = 0; i < howManyNumbers; i++){
        randomNumber = Math.round(Math.random() * howManyPicks);
        setBuilder(randomNumber, howManyNumbers);
        setBuilderCalls += 1; // Counter to know how many times we've looped.
    }
}

// Helper function to generate randon-ish numbers
function setBuilder(number, total){
    /*  Build a Set containing our random numbers  
        The numbers must be unique (hence the Set), and cannot be 0
        If the number is not 0, add it to the Set.  If it is, add 1 instead */ 
    number != 0 ? numSet.add(number) : numSet.add(1); 

    /*  Check if the setBuilderCalls counter equals our howManyNumber - if so, Loop is finished
        If the loop is done, check the size of the Set 
        If it is the same as our total, we have no duplicates, and it's safe to print the numbers */
    if (setBuilderCalls == total) {
        if(numSet.size == total){
            print(numSet); // Set is full, no duplicates - let's print!
        }
        else{
            // Set.size != howManyNumbers: we have duplicates!
           // let numOfDupes = setBuilderCalls - numSet.size;
           // console.log(`Looks like we had ${numOfDupes} duplicates...running again...`);
            luckyNumbers(howManyNumbers);
        }
    }    
} // end setBuilder

/*  Print & Sort Function:
    Takes the Set from setBuilder();, converts it to an Array, sorts it, and prints it */

function print(mySet){
    let numArray = Array.from(mySet)  // Convert the Set to an Array so we can sort it
    numArray.sort(function(a, b){return a-b});  // Then sort the Array by increasing order
    console.log(`Your ${howManyNumbers} Lucky Numbers are: `);  // Print it
    numArray.forEach(function(item, index, array) {
        console.log(item)
      })
}




/* --------------------------------- Codecademy Exercises ----------------------------------

// ------- Project 1 - Temprature Converter

// Create a constant equal to 293
const kelvin = 293;

// Subtract 273 from Kelvin to get celsius
const celsius = kelvin - 273;

// calculate Fahrenheit, but make it modifiable, then round down
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

// Use Newton scale, then round down
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log('The temprature is ' + fahrenheit + ' degrees Fahrenheit');
console.log('The temprature is ' + celsius + ' degrees Celsius');
console.log('The temprature is ' + newton + ' degrees Newton');

// --------------- Project 2: Dog Years Calculator
const myAge = 50;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
let laterDogYrs = laterYears * 4;
let myAgeIndogYears = earlyYears + laterDogYrs;
let myName = 'Christian'.toLowerCase();
console.log('My name is ' + myName + ' and I am ' + myAge);
console.log('In dog years I am ' + myAgeIndogYears);


// ----------------- Project 3: Magic Eight Ball
let userName = 'Christian';
let userQuestion = 'Will you buy a Porsche?';
let randomNumber;
let eightBall = '';

// Check for a userName...
userName ? console.log("Hello " + userName) : console.log("Hello Nobody");

// State the question...
console.log(userQuestion);

// Generate a random number between 1 and 8
// Then switch on the value...
randomNumber = Math.floor((Math.random() * 8));
// console.log(randomNumber);
eightBall = randomNumber;

switch (eightBall) {
  case 0 : console.log('It is Certain'); break;
  case 1 : console.log('It is decidedly so'); break;
  case 2 : console.log('Reply hazy...try again'); break;
  case 3 : console.log('Cannot predict now'); break;
  case 4 : console.log('Do not count on it'); break;
  case 5 : console.log('My sources say...No'); break;
  case 6 : console.log('Outlook not so good'); break;
  case 7 : console.log('Signs point to yes'); break;
  default: console.log("Error"); break;
}

// --------------------------- Project 4: Race Times
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 18;

// Determine Age & Registration status to set Race #
if (runnerAge > 18 && earlyRegistration){
 raceNumber += 1000;
}

// Determine Age & Registration Time to set Start Time
// Over 18, early registration
if(runnerAge > 18 && earlyRegistration){
 console.log(`Race Number: ${raceNumber}`);
 console.log(`Early Start Time:9:30 am`);
}
// Over 18, late registration
else if (runnerAge > 18 && !earlyRegistration){
  console.log(`Race Number: ${raceNumber}`);
  console.log('Late Start Time: 11:00 am');
}
// Under 18, registration doesn't matter
else if (runnerAge < 18){
  console.log(`Race Number: ${raceNumber}`);
  console.log('Youth Start Time: 12:30 am');
}
// Everything else - which is *exactly* 18
else {
  console.log(`Race Number: ${raceNumber}`);
  console.log('Please see the desk...');
  }





*/