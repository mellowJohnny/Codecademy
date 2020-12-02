// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]
// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Global Params:
let badCardsArray = []; // Our Array of "bad cards" set after running findInvalidCards();
let badCompanies = new Set();  // a Set to hold the names of the companies who have issed bad cards
let badCompaniesArray = []; // Array to hold the values from the badCompanies Set...


// ------------------------------ validateCred(); ------------------------------------------------

/* Function to validate a single credit card number using the Luhn Algorithm
   Takes a single card number Array as a param and changes it to a String of numbers
   The String is needed to pass into the Luhn validator - it has only one String input param 
   Luhn validator returns 'true' for good numbers and 'false' for bad numbers
   validateCred(); will in turn return 'true' or 'false' based on this result */

function validateCred(cardNumArray){
    // First create a String to hold the card number, stripped of commas
    let cardNumNoComas = cardNumArray.join('');
    
    // Next pass the card number to the Luhn validator, return 'true' for good numbers, 'false' for bad
    if (valid_credit_card(cardNumNoComas)){
        return true;
    }
    else{
        return false;
    } 
}

// ------------------------------ findInvalidCards(); ------------------------------------------------
/* 
Function to find all invalid cards, given the nested array of all cards (i.e. the batch of card numbers) 
Returns an Array of invalid card numbers called invalidCards
Also sets the badCardsArray global param with the same Array of bad card numbers - this is done so we 
can simply pass a param into idInvalidCardCompanies(); rather than call the function again */

function findInvalidCards(cardBatch){
    const invalidCards = [];
    // Loop to iterate through each array of cards in the batch
    for (let i=0; i < cardBatch.length; i++){
       // Validate each card number, adding to the invalidCards array only if it's bad
       // When card is bad, create a new Array to hold the bad card numbers
       // Then push the bad card number Array to the invalidCards Array
       if (!validateCred(cardBatch[i])){
            badCard = cardBatch[i];  
            // console.log(`Bad Card: ${badCard}`);  Print out each bad card we find....
            invalidCards.push(badCard); 
        }
    } 
    // console.table(invalidCards);
    badCardsArray = invalidCards;
    return invalidCards;
}

// ------------------------------ idInvalidCardCompanies(); ------------------------------------------------
/* 
Function to find create an array of credit card companies with invalid cards
Takes one param - a nested array of invalid credit card numbers
Numbers are comma seperated, so need to check the 0 index value:
3 = American Express, 4 = Visa, 5 = Mastercard, 6 = Discover */

function idInvalidCardCompanies(badCards){
    let numArray = [];
    // First loop over the badCards Array
    for (let i = 0; i < badCards.length; i++){
        // Then for each Array, check the 0 index for value 3,4,5, or 6
        for (let j=0; j < badCards[i].length; j++){
            // Check the 0 element of the Array to see if it's a 3, 4, 5 or 6, if we find one, add it to the Set
            switch(badCards[i][0]){
                case 3 : badCompanies.add('AMEX'); break;
                case 4 : badCompanies.add('VISA'); break;
                case 5 : badCompanies.add('MasterCard'); break;
                case 6 : badCompanies.add('Discover'); break;
                default: console.log(`Card beginning with ${badCards[i][0]} not found`);
            }
        } // Inner loop
    } // Outer Loop
    companyNameArray = Array.from(badCompanies);
    return companyNameArray;
}

// ------------------------------ valid_credit_card(); ------------------------------------------------
/* 
Luhn Algorithm CreditCard check
Input param 'value' needs to be a String... 
Function borrowed from https://gist.github.com/DiegoSalazar/4075533  */

function valid_credit_card(value) {
    // Accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) return false;
  
      // The Luhn Algorithm. It's so pretty.
      let nCheck = 0, bEven = false;
      value = value.replace(/\D/g, "");
  
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
          if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
          nCheck += nDigit;
          bEven = !bEven;
      }
      return (nCheck % 10) == 0;
    }

// Run The Program!
// This returns a multi-dimentional Array of bad cards - display as a table
console.table(findInvalidCards(batch));  

// idInvalidCards returns an Array of Card Company Names - display as a table
console.table(idInvalidCardCompanies(badCardsArray)); 
 




// ---------------------------------------- Debug ----------------------------------------------------

// Check the validateCred() function...
// validateCred(mystery1);

// Check the findInvalidCards(); function
//findInvalidCards(batch);

// List the invalid cards, returns an array of bad cards (badBatch)
// console.log(findInvalidCards(batch));

// InvalidCardCompanies
// idInvalidCardCompanies();

// console.table(badCards);
// console.table(batch);






