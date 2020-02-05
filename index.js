// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(m => { return m.toLowerCase() === string.toLowerCase() });   
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(m => { return m.toLowerCase().substr(0, letters.length) === letters.toLowerCase()});
}

function matchName(drivers, name) {
    return drivers.filter(m => { return m.name === name});
}