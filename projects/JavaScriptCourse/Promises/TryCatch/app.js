const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
    let resolvedValue = await cookBeanSouffle();
    console.log(`${resolvedValue} is served!`); 
  }
  catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();



