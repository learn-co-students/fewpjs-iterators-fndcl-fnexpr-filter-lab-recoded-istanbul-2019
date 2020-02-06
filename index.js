// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => str.localeCompare(driver, 'en', {sensitivity: 'base'}) === 0);
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.indexOf(str) === 0);
}

function matchName(drivers, str) {
    return drivers.filter(driver => str.localeCompare(driver.name) === 0);
}

done();