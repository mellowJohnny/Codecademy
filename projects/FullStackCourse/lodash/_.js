const _ = {
    // A function to ensure the provided num is within the upper and lower bounds defined by min & max
    clamp(num,min,max){
      if (num < min){
        return min;
      }
      if (num >= min && num <= max){
        return num;
      }
      if (num > max){
        return max;
      }
    }, // end clamp function

    clamp2(num,min,max){
        // first use Math.min to return the smallest number between 'num' and 'min'
        const minBound = Math.min(num,min);
        const maxBound = Math.max(num,max);
        if (num <= minBound){
            // The number is smaller than or equal to the minimum, return min
            return min;
        }
        if (num >= maxBound){
            // The number is bigger than or equal to the maximum, return max
            return max;
        }
        else {
            // Number is within the boundaries, return it
            return num;
        }
    }, // end clamp2 function

    inRange(num,start,end){
        // First, check the values - if no end value, start = 0, end value = provided start value
        if (end === 0){
            end = start; // No end value provide, set it to the Start value before we reset start to 0
            start = 0; 
        }
        // Check to see if start is bigger than end value - if so, swap the values
        if(start>end){
            let tempEnd = start;
            start = end;
            end = tempEnd;
            console.log(`New start is: ${start} and new end is ${end}`);
        }

        if(num >= start && num < end ){
            // Number falls within the range...
            return true;
        }
        if (num < start || num >= end){
            // Number is outside the range...
            return false;
        }
    }, // end inRange()

    words(sentence){
       return sentence.split(' ')
    }, // end words function

    pad(word,length){
        let newString = String(word);
        const padding = length / 2;
        console.log(`Padding is ${padding}`);
        // Check to see if the length param is an even number
        // If it's not, add the extra padding to the end
        const remainder = length % length;
        console.log(`Remainder is ${remainder}`);
        if(remainder === 0){
            // Length is even..
            console.log(`Remainder should be zero...even number: ${remainder}`)
            console.log(`Padding is: ${padding}`);
            let paddedWord = word.padStart(padding);
            console.log(`First padding... ${paddedWord}`);
            paddedWord.padEnd(padding);
            return paddedWord;
        }
        else {
            // length is odd, take the absolute value of padding
            const absoluteVal = Math.abs(padding);
            console.log(absoluteVal);
            const paddedWord = word.padStart(absoluteVal, '.');
            //paddedWord.padEnd();
            return paddedWord;
        }
    }, // end pad

    has(obj,myKey){
        // First, let's get the key-value pairs from the Object
        //const objArray = Object.entries(obj);
        // Next, loop over the array to see if the key passed in has a value...
        for (const [key, value] of Object.entries(obj)) {
            console.log(`${key}: ${value}`);
            if (myKey === key && value === 'undefined'){
                return false;
            }
            else {
                return true;
            }
          }

    }, // End has()

    invert(myObj){
        let myNewObject = {};
        for (const [key, value] of Object.entries(myObj)) {
            // Set a variable to hold the name of the current key
            let originalValue = key;
            // In the new Object, dynamically create a new property based on the current value
            // Then, assign this new property's value based on the name of the current key
            myNewObject[value] = originalValue;
          }
          return myNewObject;
    }, // End invert()
        
    findKey(object,predicate){

        for (const property in object) {
            console.log(`${property}: ${object[property]}`);
            const value = object[property];
            const predicateValue = predicate(value);
            if (predicateValue === true){
                // If true, return the property name
                return property;
            }
          }
          // Return 'undefined' if there are no truthy values
          return;


    }, // end findKey

    drop(arr,num){
        // First make sure we have at least one element to remove...
        if (num < 0 || num === 0 || num === undefined) {
            num = 1;
        }

        // Next set a variable to calculate our stopping point for the slice() function
        // We should start at index 'num' and stop at index 'arr.length'
        const stop = arr.length;
        const newArray = arr.slice(num,stop);
        return newArray;

    }, //end drop()


  }; // end Object

  console.log(_.drop(['one','two','three','four','five']));

  //-------------------------------- TESTING ---------------------------
  //console.log(_.clamp(50,1,400));
  //console.log(_.clamp2(50,1,400));
  //console.log(_.inRange(25,50,0));
  //console.log(_.words('This is the sentence I want to split'));
  //console.log(_.pad('Christian', 10))
  // console.log(_.has(testObject,'age'));
  let testObject = {
      name: 'Christian',
      age: 50,
      address: 'Oakville'
  };

  // console.log(_.invert(testObject));

  
  




// Do not write or modify code below this line.
module.exports = _;