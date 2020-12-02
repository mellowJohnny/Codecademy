// These are now Global variables...call 'em from anywhere!
import {availableAirplanes,flightRequirements,meetsStaffRequirements,meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity(){
  // Use the forEach method on the Array to loop over each element and display some values:
  const airplanes = availableAirplanes.forEach(
    function (element){
      console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
    });
};

displayFuelCapacity();

function displayStaffStatus(){
  availableAirplanes.forEach(
    function (element){
      console.log(element.name + 'meets staff requirements: ' + meetsStaffRequirements(element.availableStaff,flightRequirements.requiredStaff));
    });
};

function displaySpeedRangeStatus(){
  availableAirplanes.forEach(function (element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed,flightRequirements.requiredSpeedRange));
  });
};

displayStaffStatus();
displaySpeedRangeStatus();