// ---------------------------------- Project 5: Rock, Paper, Scissors

// This method get the hard coded human choice, and converts it to lowercase 
// Also tests for 'bomb' cheat code... 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
        return userInput;
    }
    else{
      console.log('Invalid Entry');
    }  
  };

// This method gets the computer's random choice
const getComputerChoice = () =>{
    const num = Math.floor(Math.random() * 3);
   // console.log(num);
        switch (num){
         case 0: 
             return 'rock';
         case 1:
             return 'paper';
         case 2:
            return 'scissors'
        }
    }

// This method compares the values and determines is it's a Tie, Human win, or Human loss    
const determineWinner = (userChoice, computerChoice) => {
    // First check for 'bomb" cheat :-)
    if (userChoice === 'bomb'){
        return 'Cheater Human Wins!!!!';
    } 
    // First check to see if we are tied...    
    if(userChoice === computerChoice){
          return 'Tie Game!';
        }
    // Not a tie - check if Human threw Rock
    if(userChoice === 'rock'){
        if(computerChoice === 'scissors'){
            return 'Human Wins!' // Human Rock beats Scissors
            }
        else{
            return 'Computer Wins!' // Must be Paper: Computer Paper beats Rock
            }
        }
    // Not a tie - check if Human threw Paper    
    if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
                return 'Human Wins!'; // Human Paper beats Computer Rock
            }
            else{
                return 'Computer Wins!'; // Must be Scissors: Computer Scissors beats Human Paper
            }
        }
    // Not a tie - check if Human threw Scissors    
    if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
                return 'Human Wins!'; // Human Scissors beats Computer Paper
            }
            else{
                return 'Computer Wins!'; // Must be Rock: Computer Rock beats Human Scissors
            }
        }
      }  // determineWinner();

// This method is the main game method, gets each choice, then calls determineWinner(); to see who wins
function playGame(){
    const userChoice = getUserChoice('paper'); // Hard-code the Human choice.  Cheatcode 'bomb' always wins :-)
    const computerChoice = getComputerChoice();
    console.log(`Human: ${userChoice}, Computer: ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
}

playGame();
