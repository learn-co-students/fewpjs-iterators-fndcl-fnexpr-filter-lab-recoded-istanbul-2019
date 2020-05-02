// Code your solution here
function findMatching(drivers, str) {
  return drivers.filter(x => x.toUpperCase() === str.toUpperCase());
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(x => x.startsWith(str));
}

function matchName(drivers, str) {
  return drivers.filter(x => x.name === str);
}
