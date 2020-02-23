// Code your solution here

function findMatching(arr, str) {
  return arr.filter(n => {
    return n.toUpperCase() === str.toUpperCase();
  });
}

function fuzzyMatch(arr, str) {
  return arr.filter(n => {
    return n[0] === str[0];
  });
}

function matchName(arr, str) {
  return arr.filter(n => {
    return n.name === str;
  });
}

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh"
  },
  {
    name: "Sammy",
    hometown: "New York"
  },
  {
    name: "Sally",
    hometown: "Cleveland"
  },
  {
    name: "Annette",
    hometown: "Los Angeles"
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay"
  }
];

watchName(drivers, "Bobby");
