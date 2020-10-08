
// -------------------- Codecademy Exercise ----------------------
// Create the secretMessage array below
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create a variable to hold the new Array returned by the .map() function
// What will be in the new Array?  Depends on what the callback function 'animal' wants to do...
// In this case the callback function takes the first letter of each String in the Array it is looping over
// and passes it back...
const secretMessage = animals.map(animal => {
  return animal[0];
});

// Then we can use the new secretMessage Array and join all the elements together
// Since this Array is holding the first letter from each word in the original Array,
// we squish them all together to make a sentence... 
console.log(secretMessage.join(''));

// ---------------------- My Playing -------------------------------

// Create a generic "printer" function which takes a single value and prints it to the console
// Could be used to print a single variable value
// or could be used by the .map() function is an Array to print each value in the Array.  Fun!
function arrayPrinter(value){
    console.log(value);
    // we don't really need to return anything here,
    // but it does show how we could also return each element in the Array if need be
   return value;  
}

// ----------------------- Example 1:
// call arrayPrinter on its own to print a single value:
const mySingleValue = 'Christian';
arrayPrinter(mySingleValue);

// ----------------------- Example 2
// Use arrayPrinter as the callback function in animals.map() to print the entire Array 
// The arrayPrinter function takes a single parameter which will be the current element passed from the map() iterator 
// This is a really nice modular way of using the arrayPrinter(); function: we could change it's implementation
// in the future without breaking other code
animals.map(arrayPrinter);

// We can also set up a new variable to hold the array of values passed back by arrayPrinter();
// Map therefore also returns an Array of elements passed to it from arrayPrinter();
// We set it equal to foo.  foo is now a new Array
const foo = animals.map(arrayPrinter); 

// DEBUG: To prove foo is holding an array, print it...
console.log(foo); 