const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans(){
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
};

makeBeans();

/**
 * Let’s break down what’s happening in our function:
 * We mark our function as async.
 * Inside our function, we create a variable type assigned await shopForBeans(). 
 * This means type is assigned the resolved value of the awaited promise.
 * Then, we create a variable isSoft assigned to await soakTheBeans(type). 
 * Therefore, isSoft is assigned this promise’s resolved value.
 * Last, we define a third variable dinner assigned to await cookTheBeans(isSoft) and assign the returned value to the variable
 *  Finally, we log the value of dinner to the console.
 * 
 * Though using the async...await syntax can save us some typing, the length reduction isn’t the main point. 
 * Given the two versions of the function, the async...await version more closely resembles synchronous code, 
 * which helps developers maintain and debug their code. 
 * The async...await syntax also makes it easy to store and refer to resolved values from promises further 
 * back in our chain which is a much more difficult task with native promise syntax. 
 */