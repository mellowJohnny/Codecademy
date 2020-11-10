

/**
 * Exercise 1 - Basic Promise
 */

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve,reject) => {
    if(inventory.sunglasses > 0){
      resolve('Sunglasses order processed.');
    }
    else{
      reject('That item is sold out.');
    }
  };
  
  // Dummy function to "order" sunglasses
  function orderSunglasses() {
    const myPromise = new Promise(myExecutor);
    return myPromise;
  };
  
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);

/**
* Exercise 2 - The Node setTimeout() Function
*/
    console.log("This is the first line of code in app.js.");
    // Keep the line above as the first line of code
    // Write your code here:
    const usingSTO = () => {
    console.log('Stuck in the middle with you...');
        }

    setTimeout(usingSTO, 3000);

    // Keep the line below as the last line of code:
    console.log("This is the last line of code in app.js.");



/**
* Exercise 3 - handling success & failure
*/

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

// Here's what we do on Success and on Failure:
// Remeber, when resolve is the result, we are successful - the resove() in the library.js is what passed in the message we see.  That's becasue resolve() detremines what happens on success
const handleSuccess = (success) => {
  console.log(success);
};

// And when reject is the result, we have a failure - the reject() in the library.js is what passed in the message we see.  That's becasue reject() detremines what happens on a failure
const handleFailure = (failure) => {
  console.log(failure);
};

// checkInventory returns a Promise Object.  Since calling the function returns a Promise Object, we can call .then() all on one line, at the same tim
checkInventory(order).then(handleSuccess,handleFailure);


// Example of using catch() to catch error conditions.  
prom.then((resolvedValue) => {console.log(resolvedValue);}).catch((rejectionReason) => {console.log(rejectionReason);});

/**
 * Normally it's written in multiple lines to improve readability
 * We pass a success handler to .then() and a failure handler to .catch().
 * If the promise resolves, .then()‘s success handler will be invoked with 'Yay!'.
 * If the promise rejects, .then() will return a promise with the same rejection 
 * reason as the original promise and .catch()‘s failure handler will be invoked with that rejection reason.
 */
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

  // Simple example: checkInventory() returns a Promise, allowing us to call .then() and catch() on the Object
  checkInventory(order).then(handleSuccess).catch(handleFailure);


  checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray)})
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray)
        })
    .then((successMessage) => {
        return console.log(successMessage);
            });
      