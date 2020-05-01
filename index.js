// Code your solution here
let string = "Bobby";
const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const findMatching = (drivers, string) => drivers.filter(name => name.toLowerCase() == string.toLowerCase());
findMatching(drivers1, string);

const fuzzyMatch = (drivers, string) => drivers.filter(name => name.charAt(0) == string.charAt(0));
fuzzyMatch(drivers1, string);

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

const matchName = (drivers, string) => {
    return drivers.filter(obj => (obj.name == string));

}
matchName(drivers, string)