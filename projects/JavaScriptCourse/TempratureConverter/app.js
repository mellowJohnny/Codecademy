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