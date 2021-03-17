/* 
Exercise 1:  Accessing Node's environment 
*/

// Grab the memoryUsage Object...
let memUsage = process.memoryUsage();

// Get the value of memoryUsage.heapUsed...
let initialMemory = memUsage.heapUsed;
// Get the third argument used when the app is run ('node' is element 0, the file is element 1, our string is element 2)
// EX: node app.js myBigLongString
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

/*
Exercise 2: Events
Here's how it works:
1. Require the events Core Module so we can use events
2. Create a new EventEmitter object so we can call .on() and .emit() functions
3. The .on() function listens for an Event, in this case a 'celebration' Event.  What we listen for is up to us
   When we hear an Event with a value of 'celebration', call the callback method called listenerCallback
4. The listenerCallback() function is called .on() hears a 'celebrate' Event fired 
   when the .emit() function is executed
5. .emit() is the trigger for the Event fire, and passes in the type of Event being fired ('celebrate')
    and some data - in this case our data (the 2nd argument) is a String telling us what to celebrate
*/

// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

// Then we create a new EventEmitter object so we can call .emit() and .on()
let myEmitter = new events.EventEmitter();

// Our listner callback function - this is the callback function which 
// gets called when .on() function is called... 
// This will print 'Celebrate' and whatever the 2nd argument to the emit() call is
let listenerCallback = (data) => {
    // do something to show that our callback function has executed
    console.log('Celebrate ' + data);
}

// Invoke the .on() of the emitter...
// 'celebration' is our event name, listnerCallBack is the function we want to call...
myEmitter.on('celebration', listenerCallback)

// Call the Event Emitter...
myEmitter.emit('celebration', 'Your Birthday!!!');


// Exercise 3: Errors
// Note: Good example of an Object used to define methods (like errorProneAsyncAPI) 
// to export, with properties defined as methods.
// Remember - Object properties defined as functions are known as methods, because they belong to an Object

module.exports = {
    errorProneAsyncApi: (input, callback) => {
      console.log(`Running errorProneAsyncApi with input: ${input}...\n`)
      setTimeout(() => {
        let myErr;
        if (input === 'problematic input') {
          myErr = new Error('whoops')
          callback(myErr)
        } else {
          let responseData = `Received valid input "${input}"`
          callback(myErr, responseData)
        }
      }, 0)
    },
    
    naiveErrorProneAsyncFunction: (input, callback) => {
      console.log(`Running naiveErrorProneAsyncFunction with input: ${input}...\n`)
      setTimeout(() => {
        if (input === 'problematic input') {
          throw new Error('whoops')
        } else {
          let responseData = `Received valid input "${input}"`
          callback(responseData)
        }
      }, 0)
  }
    
  }
  
  
  
  
