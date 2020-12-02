let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
// Each function returns a Promise, but we can run them all independently...
async function serveDinner(){
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  // Now let's log their progress using await to return the resolved Promise value...
  console.log(`Dinner is served. We’re having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();

// Same exercise as above, but using Promise.all();

// Write your code below:
async function serveDinnerAgain(){
  // Set up the Array of functions to call, each returning a Promise.  
  // By using await Promise.all() we get back a single resolved promise 
  // This technique will also allow us to "fail fast" - if any one of the function calls fail
  // we will immediately stop and Promise.all() will return the rejected value
  let foodArray = await Promise.all([steamBroccoli(), cookRice(),bakeChicken(),cookBeans()])
  
  // Set up a variable to hold each function's resolved value...
  let vegetable = foodArray[0];
  let starch = foodArray[1];
  let protein = foodArray[2];
  let side = foodArray[3];
  console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
}

serveDinnerAgain();

