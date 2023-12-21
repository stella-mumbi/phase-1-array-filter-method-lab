// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0);
}
function matchName(drivers, homeTown){
return drivers.filter((record) => record.name === homeTown);
}