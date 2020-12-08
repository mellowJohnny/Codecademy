/** 
const greetWorld = () => {
    return 'Hello, World!';
}

const greeting = greetWorld();
console.log(greeting);



  // Write your function here:

const truthyOrFalsy = (test) => {
    if (test === false || 
        test === 0 ||
        test === -0 ||
        //test === 0n ||
        test === "" ||
        test === null ||
        test === undefined ||
        test === NaN) {
          return false;
        }
        else {
          return true;
        }
    }

    // Uncomment the line below when you're ready to try out your function
  console.log(truthyOrFalsy('hey')) // Should print false
  
  // We encourage you to add more function calls of your own to test your code!

  // Write your function here:
const howOld = (age,year) => {
    const currentYear = 2020;
    const yearBorn = 2020 - age;
    
    if (year > currentYear) { // Future
       console.log('Future') ;
       const yearsIntoTheFuture = year - currentYear;
       const futureAge = age + yearsIntoTheFuture
      return `You will be ${futureAge} in the year ${year}`;
    }
    if (year < yearBorn) { // Past
        console.log('Past')
       const yearsInThePast = yearBorn - year;
      return `The year ${year} was ${yearsInThePast} years before you were born`;  
    }

   if (year < currentYear && year > yearBorn){
    console.log('past, not before birth year')
     const yearsSinceBirth = year - yearBorn;
     return `You were ${yearsSinceBirth} in the year ${year}`;
   }
   else{
       return `That's your birthyear...`
   }
}
   console.log(howOld(50,1870));
   
   // Once your function is written, write function calls to test your code!

   // Reverse Array:
   const reverseArray = (values) => {
    const arrayLength = values.length;
    const newArray = [];
    for (let i=arrayLength -1; i>=0; i--) {
        console.log(values[i]);
    }
  }

  reverseArray(['this','is','the','array']);



  // --------------------------------------------
  const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            let number = arr[i];
            console.log(arr.length);
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
        j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
   
  

 const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

 const politelyDecline = (veg) => {
       console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
 }
 
 // Write your code here:
 const declineEverything = (input) => {
   input.forEach(politelyDecline);
 }

 declineEverything(veggies);
  
  

 const numbers = [2, 7, 9, 171, 52, 33, 14]

 // Write your code here:
 const squareNums = (numbers) => {
   let newArrayMap = [];
   
   for (i=0; i<numbers.length; i++) {
     let originalNum = numbers[i];
     let squaredNum = numbers[i] * numbers[i];
     const myMap = new Map();
     myMap.set(originalNum,squaredNum);
     newArrayMap.push(myMap);
   }
   return newArrayMap;
 }
 
 console.log(squareNums(numbers));
  

  // Write your code here:
const shoutGreetings = (greetings) => {
    const newArray = [];
    for (i=0; i<greetings.length; i++) {
      const upper = greetings[i].toUpperCase();
      newArray.push(`${upper}!`);
    }
    return newArray;
  }
  

  // Feel free to uncomment out the code below to test your function!
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  

  // Write your code here:
// Write your code here:

const isTheDinnerVegan = (food) => {
    for (let i=0; i<food; i++) {
        if (food[i]['source'] !== 'plant'){
            return false;}
        else {
            return true;
        }
    }
} // end function

*/

const dogFactory = (name,breed,weight) => {
    get name(){
        return this._name;
      }
      set name(newName){
        this._name = newName;
      }
    
    return {
      _name: name,
      _breed: breed,
      _weight: weight
    }
    
  
  }
  
  console.log(dogFactory('ozzie','Wheaten Terrier','34'));