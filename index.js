// Code your solution here

let drivers = [{ name: "Allan", age: 25 }, { name: "Mustafa", age: 22 }, { name: "MuWissam", age: 28 }, { name: "AllAn", age: 20 }]
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.startsWith(str));
}

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str);
}
