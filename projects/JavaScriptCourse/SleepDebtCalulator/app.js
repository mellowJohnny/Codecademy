

/* Removed as part of v2 refactor
    // Hardcode the number of hours per night you sleep...
    const getSleepHours = day => {
    day = day.toLowerCase(); // make sure input it lowercase
    switch (day){
      case 'monday': return 8; case 'tuesday': return 7.5; case 'wednesday': return 6.5;
      case 'thursday': return 8; case 'friday': return 7; case 'saturday': return 6; case 'sunday': return 8.5;
    }
  } */
  
  /*  Original getActualSleepHours
  const getActualSleepHours = () => {
    let totalHours = 0;
    totalHours = totalHours + getSleepHours('monday');
    totalHours = totalHours + getSleepHours('tuesday');
    totalHours = totalHours + getSleepHours('wednesday');
    totalHours = totalHours + getSleepHours('thursday');
    totalHours = totalHours + getSleepHours('friday');
    totalHours = totalHours + getSleepHours('saturday');
    totalHours = totalHours + getSleepHours('sunday');
    return totalHours;
  } */

  // New Version...just hardcode a week's worth of sleep hours into a concise arrow function
  const getActualSleepHours = () => 6+7.5+8+7+7.5+6+7;

  const getIdealSleepHours = hours => {
    const idealHours = hours * 7;
    return idealHours;
  };

  const calculateSleepDebt = (prefHours) => {
      let actualHours = getActualSleepHours();
      let idealHours = getIdealSleepHours(prefHours); 
      const sleepDebt =  actualHours - idealHours;
      if (actualHours === idealHours){
        console.log('You Slept the Perfect Amount!');
      }
      else if (sleepDebt > 0){
        console.log(`You Slept an extra ${sleepDebt} hours`);
      }
      else {
        console.log(`You Didn't Sleep Enough!  You are missing ${sleepDebt} hours`);
      }
     return sleepDebt;
  }
  
  calculateSleepDebt(8); // Pass in the ideal number of hours you'd like to sleep per night 

  // ------------- Debug -------------------
  // console.log(getSleepHours('saturday'));
  // console.log(getActualSleepHours());
  // console.log(getIdealSleepHours());
  //console.log(calculateSleepDebt());