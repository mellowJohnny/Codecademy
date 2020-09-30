// --------------------------- Project 4: Race Times
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 18;

// Determine Age & Registration status to set Race #
if (runnerAge > 18 && earlyRegistration){
 raceNumber += 1000;
}

// Determine Age & Registration Time to set Start Time
// Over 18, early registration
if(runnerAge > 18 && earlyRegistration){
 console.log(`Race Number: ${raceNumber}`);
 console.log(`Early Start Time:9:30 am`);
}
// Over 18, late registration
else if (runnerAge > 18 && !earlyRegistration){
  console.log(`Race Number: ${raceNumber}`);
  console.log('Late Start Time: 11:00 am');
}
// Under 18, registration doesn't matter
else if (runnerAge < 18){
  console.log(`Race Number: ${raceNumber}`);
  console.log('Youth Start Time: 12:30 am');
}
// Everything else - which is *exactly* 18
else {
  console.log(`Race Number: ${raceNumber}`);
  console.log('Please see the desk...');
  }
