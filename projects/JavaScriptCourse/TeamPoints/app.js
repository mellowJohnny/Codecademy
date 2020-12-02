/** TODO: Once created, you can manipulate these data structures as well as gain insights from them. 
 * For example, you might want to get the total number of games your team has played, 
 * or the average score of all of their games.
*/

const team = {
    // ---------------- Team Object properties (keys):
    
      // The _players property is an Array of Objects containing player info
      // We are populating the _players and _games with some initial data
      _players: [
        {
          firstName: 'Mike',
          lastName: 'Woods',
          age: 31
        },
        {
            firstName: 'Chris',
            lastName: 'Froome',
            age: 32
        },
        {
          firstName: 'Lance',
          lastName: 'Armstrong',
          age: 32
        },
        ], // End _player array property
    
      // The _games property is an Array of Objects containing game info
      _games: [
        {
          opponent: 'France',
          teamPoints: 103,
          opponentPoints: 75
        },
        {
          opponent: 'Italy',
          teamPoints: 112,
          opponentPoints: 65
        },
        {
          opponent: 'Spain',
          teamPoints: 133,
          opponentPoints: 95
        }
      ], // end _games array property
    
    // Team Object's getters - treated as PROPERTIES of the object
      get players(){
        return this._players;
      },
    
      get games(){
        return this._games;
      },
    
    // -------------  Team Object's Methods:
    
    // addPlayer - creates a new Player object and pushes it to the Team's _player property
    addPlayer: function(firstName,lastName,age){
      let newPlayer = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      // push the new player to the current _player array...
      this._players.push(newPlayer);
    
    }, // end addPlayer
    
    addGame: function(opponent,theirPoints,ourPoints){
      let newGame = {
        opponent: opponent,
        opponentPoints: theirPoints,
        teamPoints: ourPoints
      }
      // push the new player to the current _player array...
      this._games.push(newGame);
    
    }, // end addGame
    
    }; // Team object
    
    //--------------------- Run / Test -------------------------
    // Let's add a player!
    team.addPlayer('Christian','Couillard',50);
    team.addPlayer('Guy','Lafleur',65); 
    team.addGame('San Francisco',99,110);
    
    // ------------ DEBUG ---------------
    //console.log(team.players);
    console.log(team.games);
    
    /*
    console.log();
    console.log();
    console.log();
    */