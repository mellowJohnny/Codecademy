
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 

  console.log(spaceship.engine.model);

  let capFave = spaceship.crew.captain['favorite foods'][0];

  console.log(capFave);

  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
      
  }

  console.log(robot.provideInfo());

  const robot2 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}`
      }
    }
  };

  console.log(robot2.energyLevel);

  const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof this._numOfSensors === 'number'){
        this._numOfSensors = num;
      }
      else{
        return 'Sensors must be a number';
      }
    }
    
  };

 
// -------------------------------------------------------
