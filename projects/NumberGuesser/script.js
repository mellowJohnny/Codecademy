/*
    Christian Couillard
    September 2020
*/

// Set Up Some Variables:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Funuction to generate a random number between 0 and 9
// This is the number we are trying to guess...
const generateTarget = () =>{
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

// Compare Guesses Function 
// Compares how close each guess is to the "target" number generated by generateTarget()
// Takes the generated Computer Number, the human guess, and the random target number as params
const compareGuesses = (humanNumber,computerNumber,targetNumber) => {
    human = humanNumber;
    computer = computerNumber;
    target = targetNumber;

    // Compare the Human & Computer Guesses to the Target Number
    // Returns the absolute difference between numbers
    const humanCloseness = Math.abs(human - target); 
    const computerCloseness = Math.abs(computer - target); 

    // See who was closer! House Rules: Ties go to the Human
    if(humanCloseness === computerCloseness){
        return true; // Tie - Human wins
    }
    else if(humanCloseness < computerCloseness){
        return true; // Human was closer, you win
    }
    else{
        return false; // Computer was closer, you lose
    }

} // End compareGuesses();

// Let's Keep Score!  The winner param keeps track of wins - 'human' for Human winner, 'computer' for Computer
const updateScore = winner => {
   winner === 'human' ? humanScore = humanScore +1 : computerScore = computerScore +1;
}

// Let's keep track of how many rounds we've played with a counter...
// Concise arrow function :-)
const advanceRound = () => currentRoundNumber = currentRoundNumber +1;


