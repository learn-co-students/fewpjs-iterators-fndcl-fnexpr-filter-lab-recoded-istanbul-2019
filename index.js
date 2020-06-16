// Code your solution here
function findMatching(arrayOfDrivers, driverName) {
    return arrayOfDrivers.filter(driver => driver.toUpperCase() === driverName.toUpperCase())
}

function fuzzyMatch(arrayOfDrivers, letter) {
    return arrayOfDrivers.filter(driver => driver.slice(0, letter.length).toUpperCase() === letter.toUpperCase())
}

function matchName(arrayOfDrivers, driverName) {
    return arrayOfDrivers.filter(driver => driver.name.toUpperCase() === driverName.toUpperCase())
}