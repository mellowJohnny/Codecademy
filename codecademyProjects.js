// --------------------------------- Codecademy Exercises ----------------------------------

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
