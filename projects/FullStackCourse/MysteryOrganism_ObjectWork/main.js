// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// P. aequor object factory
const pAequorFactory = (specimenNum,array) => {
  return {
    _specimenNum: specimenNum,
    _dna: array,
    mutate() {
      // Old DNA Strand
      console.log(`Original DNA strand: ${this._dna}`);

      // Generate a new Random DNA Base to mutate to
      let newBase = returnRandBase();

      // Randomly generate an index value
      // This will be our random DNA base to change
      const randomIndex = Math.floor(Math.random() * 15);

      // Get the value of the random DNA base with our random index number
      const baseToBeMutated = this._dna[randomIndex];

      // Check to see if our new random DNA base is the same as 
      // the value of our randomly chosen index value.  If it is, run returnRandBase again...
      // NOTE: There is still a chance the second call to generate a random Base value
      // will return the same value *again*...but that's ok for now
      if (newBase === baseToBeMutated) {
        newBase = returnRandBase();
      }
      // Finally, replace 1 element at index 'randomIndex' with value 'newBase'
      array.splice(randomIndex, 1, newBase);
      console.log(`New DNA Sequence is: ${this._dna}`);

    }, // end mutate()

    compareDNA(pAequor){
      const myDNA = this._dna;
      const dnaToCompare = pAequor._dna;
      console.log(this._dna);
      console.log(dnaToCompare);
      
      let dnaCounter = 0;
      for (let i=0; i<myDNA.length; i++){
          if (myDNA[i] === dnaToCompare[i]){
           // console.log(`DNA matches: ${myDNA[i]} is the same as ${dnaToCompare[i]}`);
            dnaCounter++;
          }
      }
      // Compute the precentage of shared DNA
      const percentShared = (dnaCounter / 15) * 100;
      console.log(`Specimen 1 and Specimen 2 have ${Math.round(percentShared)}% DNA in common`)
    }, // end compareDNA()

    willLikelySurvive(){
      let survivalCounter = 0;
      const dna = this._dna;
      for (let i=0; i<dna.length; i++){
        if (dna[i] === 'C' || dna[i] === 'G'){
          survivalCounter++;
        }
      }
      // Calculate % of C & G base DNA...
      const survivalChance = Math.round((survivalCounter / 15) * 100);
      if (survivalChance >= 60){
        console.log(`Chance of survical is good: ${survivalChance}%`)
        return true
      }
      else {
        console.log(`Chance of survival is bad: ${survivalChance}%`)
        return false
      }

    }, // end willLikelySurvive()

    } // end return
} // end factory

// ------------------------  Create 30 new instances...
const creation = (numToCreate) => {
  const creationArray = [];
  let idSeed = 100;
  for (let i=0; i<numToCreate; i++){
    // Let's increment the ID before using it...
    idSeed++
    // Now create the random DNA strand
    const dnaStrand = mockUpStrand();
    // Create a new P. aequor!
    const newAequor = pAequorFactory(idSeed,dnaStrand);
    creationArray.push(newAequor);
  }
  return creationArray
} // end creation!


// ------------------------------------ TEST ----------------------------
const dnaStrand1 = mockUpStrand();
const dnaStrand2 = mockUpStrand();
const newSpecimen1 = pAequorFactory(001,dnaStrand1);
const newSpecimen2 = pAequorFactory(002,dnaStrand2);

// newSpecimen1.mutate();
newSpecimen1.compareDNA(newSpecimen2);

// Return Survival Chance...
console.log(newSpecimen1.willLikelySurvive());

// Create 30 new P. aequor
const lifeArray = creation(30);

lifeArray.forEach(element => console.log(element));




